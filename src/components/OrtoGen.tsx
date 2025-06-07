import React, { useState } from "react";

const OrtoGen: React.FC = () => {
    const [numVariables, setNumVariables] = useState<number>(3);
    const [numLevels, setNumLevels] = useState<number>(2);
    const [numResults, setNumResults] = useState<number>(1);
    const [definitionVisible, setDefinitionVisible] = useState<boolean>(false);
    const [arrayVisible, setArrayVisible] = useState<boolean>(false);
    const [resultsVisible, setResultsVisible] = useState<boolean>(false);
    const [definitionTable, setDefinitionTable] = useState<string>("");
    const [taguchiArray, setTaguchiArray] = useState<string>("");
    const [resultsTable, setResultsTable] = useState<string>("");
    const [resultsIndices, setResultsIndices] = useState<string[]>([]);
    const [rawResults, setRawResults] = useState<any[]>([]); // Store raw results for export

    const numberToLetters = (number: number): string => {
        let result = "";
        while (number > 0) {
            let remainder = (number - 1) % 26;
            result = String.fromCharCode(65 + remainder) + result;
            number = Math.floor((number - 1) / 26);
        }
        return result;
    };

    const downloadCSV = (data: string, filename: string) => {
        const blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadJSON = (data: any, filename: string) => {
        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json",
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const exportTaguchiArray = () => {
        let csvContent = "Test #";
        for (let i = 0; i < numVariables; i++) {
            csvContent += `,Factor ${numberToLetters(i + 1)}`;
        }
        for (let i = 0; i < numResults; i++) {
            csvContent += `,Result ${i + 1}`;
        }
        csvContent += "\n";

        const rows = document.querySelectorAll("table tbody tr");
        rows.forEach((row) => {
            const cells = row.querySelectorAll("td, th");
            const rowData = Array.from(cells)
                .map((cell) => cell.textContent?.trim() || "")
                .join(",");
            csvContent += rowData + "\n";
        });

        downloadCSV(csvContent, "taguchi_array.csv");
    };

    const exportResults = () => {
        downloadJSON(rawResults, "calculated_results.json");
    };

    const generateDefinitionArray = () => {
        setDefinitionVisible(true);

        let outputTableHTML = '<table class="table border border-[#fad02c]">';
        outputTableHTML +=
            '<thead><tr><th scope="col" class="text-[#333652]">Factor</th>';
        for (let i = 0; i < numVariables; i++) {
            outputTableHTML += `<th scope="col"><input id="F${i}" type="text" value="${numberToLetters(
                i + 1
            )}" class="border border-[#fad02c] rounded-md p-1 text-[#333652]"></th>`;
        }
        outputTableHTML += "</tr></thead><tbody>";

        for (let i = 0; i < numLevels; i++) {
            outputTableHTML += `<tr><th scope="row" class="text-[#333652]">Level ${
                i + 1
            }</th>`;
            for (let j = 0; j < numVariables; j++) {
                outputTableHTML += `<td><input id="F${j}L${i}" type="text" value="${numberToLetters(
                    j + 1
                )}${
                    i + 1
                }" class="border border-[#fad02c] rounded-md p-1 text-[#333652]"></td>`;
            }
            outputTableHTML += "</tr>";
        }
        outputTableHTML += "</tbody></table>";

        if (numResults > 0) {
            outputTableHTML +=
                '<br><table class="table border border-[#fad02c]"><tbody>';
            for (let i = 0; i < numResults; i++) {
                outputTableHTML += `<tr><th scope="row" class="text-[#333652]">Result ${
                    i + 1
                }</th><td><input id="R${i}" type="text" value="R${
                    i + 1
                }" class="border border-[#fad02c] rounded-md p-1 text-[#333652]"></td></tr>`;
            }
            outputTableHTML += "</tbody></table>";
        }

        setDefinitionTable(outputTableHTML);
    };

    const generateTaguchiArray = () => {
        setArrayVisible(true);

        let Q = numLevels;
        let N = numVariables;

        // Array Generation Maths
        let J = Math.floor(Math.log(N * (Q - 1) + 1) / Math.log(Q));
        if (N !== (Math.pow(Q, J) - 1) / (Q - 1)) {
            J = J + 1;
        }
        let QJ = Math.pow(Q, J);

        let Ta = new Array(QJ).fill(null).map(() => new Array(N).fill(0));

        // Step 1: Construct the basic columns
        for (let k = 1; k <= J; k++) {
            let j = (Math.pow(Q, k - 1) - 1) / (Q - 1) + 1;
            for (let i = 1; i <= QJ; i++) {
                Ta[i - 1][j - 1] = Math.floor((i - 1) / Math.pow(Q, J - k)) % Q;
            }
        }

        // Step 2: Construct the nonbasic columns
        for (let k = 2; k <= J; k++) {
            let j = (Math.pow(Q, k - 1) - 1) / (Q - 1) + 1;
            for (let s = 1; s <= j - 1; s++) {
                for (let t = 1; t <= Q - 1; t++) {
                    for (let i = 0; i < QJ; i++) {
                        Ta[i][j + (s - 1) * (Q - 1) + t - 1] =
                            (Ta[i][s - 1] * t + Ta[i][j - 1]) % Q;
                    }
                }
            }
        }

        // Step 3: Increment all values by one
        for (let i = 0; i < QJ; i++) {
            for (let j = 0; j < N; j++) {
                Ta[i][j]++;
            }
        }

        // Step 4: Return only the first N columns
        Ta = Ta.map((row) => row.slice(0, N));

        // Convert to HTML
        let outputTableHTML = '<table class="table border border-[#fad02c]">';
        outputTableHTML +=
            '<thead><tr><th scope="col" class="text-[#333652]">#</th>';
        for (let i = 0; i < N; i++) {
            let factorName =
                document.getElementById(`F${i}`)?.value ||
                numberToLetters(i + 1);
            outputTableHTML += `<th scope="col" class="text-[#333652]">${factorName}</th>`;
        }
        for (let i = 0; i < numResults; i++) {
            outputTableHTML += `<th scope="col" class="text-[#333652]">Result ${
                i + 1
            }</th>`;
        }
        outputTableHTML += "</tr></thead><tbody>";

        const indices: string[] = [];
        for (let i = 0; i < QJ; i++) {
            let resultsIndex = "";
            outputTableHTML += `<tr><th scope="row" class="text-[#333652]">${
                i + 1
            }</th>`;
            for (let j = 0; j < N; j++) {
                let levelID = `F${j}L${Ta[i][j] - 1}`;
                let levelName =
                    document.getElementById(levelID)?.value ||
                    `${numberToLetters(j + 1)}${Ta[i][j]}`;
                outputTableHTML += `<td class="text-[#333652]">${levelName}</td>`;
                resultsIndex += levelID;
            }
            for (let j = 0; j < numResults; j++) {
                outputTableHTML += `<td><input id="T${i}R${j}" type="number" value="0" class="border border-[#fad02c] rounded-md p-1 text-[#333652]"></td>`;
            }
            outputTableHTML += "</tr>";
            indices.push(resultsIndex);
        }
        outputTableHTML += "</tbody></table>";

        setTaguchiArray(outputTableHTML);
        setResultsIndices(indices);
    };

    const generateResults = () => {
        setResultsVisible(true);

        let Q = numLevels;
        let N = numVariables;
        let R = numResults;

        let outputTableHTML = "";
        const resultsData: any[] = [];

        for (let i = 0; i < N; i++) {
            const factorName = document.getElementById(`F${i}`)?.value || "";
            const factorResults: any = { factor: factorName, levels: [] };

            outputTableHTML += `<h4 class="text-[#fad02c] font-bold">${factorName}</h4>`;
            outputTableHTML +=
                '<table class="table border border-[#fad02c]"><thead><tr><th scope="col" class="text-[#333652]">Level</th>';
            for (let j = 0; j < R; j++) {
                outputTableHTML += `<th scope="col" class="text-[#333652]">Result ${
                    j + 1
                }</th>`;
            }
            outputTableHTML += "</tr></thead><tbody>";

            for (let j = 0; j < Q; j++) {
                const levelName =
                    document.getElementById(`F${i}L${j}`)?.value || "";
                const levelResults: any = { level: levelName, results: [] };

                outputTableHTML += `<tr><td class="text-[#333652]">${levelName}</td>`;
                for (let k = 0; k < R; k++) {
                    let resultValue = 0;
                    for (let m = 0; m < resultsIndices.length; m++) {
                        if (resultsIndices[m].includes(`F${i}L${j}`)) {
                            resultValue += parseFloat(
                                (
                                    document.getElementById(
                                        `T${m}R${k}`
                                    ) as HTMLInputElement
                                )?.value || "0"
                            );
                        }
                    }
                    levelResults.results.push(resultValue);
                    outputTableHTML += `<td class="text-[#333652]">${resultValue}</td>`;
                }
                factorResults.levels.push(levelResults);
                outputTableHTML += "</tr>";
            }
            resultsData.push(factorResults);
            outputTableHTML += "</tbody></table>";
        }

        setResultsTable(outputTableHTML);
        setRawResults(resultsData); // Store results for export
    };

    return (
        <section id="ortogen" className="py-20 px-4 bg-[#e9eaec]">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
                    Ortogonal Array Generator
                </h2>

                <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-[#333652] mb-6 text-center">
                        OrtoGen
                    </h3>

                    <div className="flex flex-col gap-4">
                        <div>
                            <label
                                htmlFor="numberOfVariables"
                                className="block text-[#333652] font-medium"
                            >
                                Number of Variables (Factors)
                            </label>
                            <input
                                type="number"
                                id="numberOfVariables"
                                min="1"
                                value={numVariables}
                                onChange={(e) =>
                                    setNumVariables(
                                        parseInt(e.target.value) || 1
                                    )
                                }
                                className="mt-1 block w-full border-[#fad02c] rounded-md shadow-sm focus:ring-[#fad02c] focus:border-[#fad02c]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="numberOfSettings"
                                className="block text-[#333652] font-medium"
                            >
                                Number of Settings (Levels)
                            </label>
                            <input
                                type="number"
                                id="numberOfSettings"
                                min="2"
                                value={numLevels}
                                onChange={(e) =>
                                    setNumLevels(parseInt(e.target.value) || 2)
                                }
                                className="mt-1 block w-full border-[#fad02c] rounded-md shadow-sm focus:ring-[#fad02c] focus:border-[#fad02c]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="numberOfResults"
                                className="block text-[#333652] font-medium"
                            >
                                Number of Measurements (Results)
                            </label>
                            <input
                                type="number"
                                id="numberOfResults"
                                min="1"
                                value={numResults}
                                onChange={(e) =>
                                    setNumResults(parseInt(e.target.value) || 1)
                                }
                                className="mt-1 block w-full border-[#fad02c] rounded-md shadow-sm focus:ring-[#fad02c] focus:border-[#fad02c]"
                            />
                        </div>
                    </div>
                    <button
                        className="mt-6 mx-auto w-full bg-[#fad02c] hover:bg-[#333652] text-[#222222] hover:text-white font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg flex items-center justify-center"
                        onClick={generateDefinitionArray}
                    >
                        Define Labels!
                    </button>
                </div>

                {definitionVisible && (
                    <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto mt-8">
                        <h3 className="text-2xl font-bold text-[#333652] mb-6 text-center">
                            Label Definition
                        </h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: definitionTable,
                            }}
                        />
                        <div className="flex justify-between mt-6">
                            <button
                                className="mx-auto w-full bg-[#fad02c] hover:bg-[#333652] text-[#222222] hover:text-white font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg flex items-center justify-center"
                                onClick={generateTaguchiArray}
                            >
                                Generate Array!
                            </button>
                        </div>
                    </div>
                )}

                {arrayVisible && (
                    <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto mt-8">
                        <h3 className="text-2xl font-bold text-[#333652] mb-6 text-center">
                            Taguchi Array
                        </h3>
                        <div
                            dangerouslySetInnerHTML={{ __html: taguchiArray }}
                        />
                        <div className="flex justify-between gap-4 mt-6">
                            <button
                                className="bg-[#fad02c] hover:bg-[#333652] text-[#222222] hover:text-white font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg flex items-center justify-center"
                                onClick={generateResults}
                            >
                                Calculate Results!
                            </button>
                            <button
                                className="bg-[#fad02c] hover:bg-[#333652] text-[#222222] hover:text-white font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg flex items-center justify-center"
                                onClick={exportTaguchiArray}
                            >
                                Download Array (CSV)
                            </button>
                        </div>
                    </div>
                )}

                {resultsVisible && (
                    <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto mt-8">
                        <h3 className="text-2xl font-bold text-[#333652] mb-6 text-center">
                            Results
                        </h3>

                        <div
                            dangerouslySetInnerHTML={{ __html: resultsTable }}
                        />
                        <button
                            className="mx-auto w-full bg-[#fad02c] hover:bg-[#333652] text-[#222222] hover:text-white font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg flex items-center justify-center"
                            onClick={exportResults}
                        >
                            Download Results (JSON)
                        </button>
                    </div>
                )}

                <div className="text-center mt-8">
                    <a
                        href="https://sskki-exe.github.io/TaguchiArrayGenerator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#333652] italic underline hover:text-[#fad02c]"
                    >
                        Source
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OrtoGen;
