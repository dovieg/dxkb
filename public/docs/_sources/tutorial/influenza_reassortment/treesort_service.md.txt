# Run TreeSort Analysis and View Results
#### [Made by Anna Capria with Scribe](https://scribehow.com/shared/Run_TreeSort_Analysis_and_View_Results__qQWNisfuT5WM4gNm7TRgPw)
Updated Nov 6 2025

The BV-BRC Influenza Reassortment Analysis Service, powered by TreeSort, detects reassortment events among segmented influenza virus genomes. This service compares the evolutionary histories of individual influenza segments—such as hemagglutinin (HA) and neuraminidase (NA)—to identify where segment genealogies differ, indicating potential reassortment.

TreeSort uses the phylogenetic tree of one segment (the reference segment) as an evolutionary hypothesis for another (the challenge segment). Breakpoints are detected when divergence times on the reference tree cannot be explained by substitution patterns in the challenge segment, signaling reassortment.

TreeSort provides high accuracy in simulations and can process datasets containing tens to hundreds of thousands of influenza strains in minutes. This scalable method allows users to systematically detect reassortment events in large surveillance datasets, supporting downstream comparative genomics and epidemiological analyses within BV-BRC.

The Influenza Reassortment Analysis Service currently supports only nucleotide sequences from Influenza viruses. Future versions will extend compatibility to other segmented viruses.

The TreeSort code repository is available at:
[https://github.com/flu-crew/TreeSort](https://github.com/flu-crew/TreeSort)

Reference:
Markin, A., Macken, C.A., Baker, A.L., & Anderson, T.K. Revealing reassortment in influenza A viruses with TreeSort. bioRxiv (2024). https://doi.org/10.1101/2024.11.15.623781

1\. From the top of any BV-BRC page, click on the **Tools & Services** tab. Under **Viral Tools**, select **Influenza Reassortment Analysis**.

This will open the **Influenza Reassortment Analysis Service** landing page.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/0f8994c0-46cb-4ab1-8f4a-45fd34e66290/ascreenshot.jpeg?tl_px=74,43&br_px=2551,1428&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=524,277)


2\. Click "click to open info dialog" This will give you an overview of the service.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/47b90ac6-a847-41c5-b910-72edafa6963e/ascreenshot.jpeg?tl_px=0,0&br_px=2476,1384&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=503,38)


3\. Note the specific needs of the input fast file. TreeSort requires a **FASTA file** containing multiple influenza virus segments. FASTA headers must follow the strict format required by TreeSort: strain_name|segment|collection_date

Only the following segment names are recognized:\
**PB2, PB1, PA, HA, NP, NA, MP, NS**

Incorrect or incomplete headers will result in validation errors.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-05/36bedb6f-0b8f-4e25-85d0-7dcd668e9f88/user_cropped_screenshot.webp?tl_px=62,235&br_px=2539,1620&force_format=jpeg&q=100&width=1120.0)


4\. Click the **Folder** icon to select a FASTA file from your Workspace.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/28a74568-6386-461d-896d-fa7c797e4568/ascreenshot.jpeg?tl_px=0,143&br_px=2476,1528&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=418,277)


5\. Click "Public Workspaces" to find this example data set.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/937d446b-cfff-49a7-88a2-a3774a68da96/ascreenshot.jpeg?tl_px=0,0&br_px=2476,1384&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=308,114)


6\. Double-click "BVBRC Tests" if you want to get the Test Data for this service. Alternatively, use the dropdown arrow to choose from recently used files.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/6914314d-b392-47e7-b471-b08670ea9a6a/ascreenshot.jpeg?tl_px=0,0&br_px=2476,1384&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=401,253)


7\. Double-click "TreeSort" to get to the test data.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/0964ee9e-fe6f-4b49-9734-4ac75a7a9c6c/ascreenshot.jpeg?tl_px=0,471&br_px=2476,1856&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=455,364)


8\. Click "public_H5Nx_2344b.fasta" and click ok to use this fasta file.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/1282ac77-57c2-4e26-9247-307da004c853/ascreenshot.jpeg?tl_px=0,0&br_px=2476,1384&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=414,265)


9\. Specify the workspace directory where the TreeSort results will be stored.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/bad32c44-14a6-4444-bff7-005797167e29/ascreenshot.jpeg?tl_px=0,244&br_px=2476,1629&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=342,277)


10\. Click the "Output name" field. Provide a base name for the output files. The resulting tree file will be named `<output_name>.tre`.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/c0cd8585-a298-4744-a465-3aca9070a26b/ascreenshot.jpeg?tl_px=0,244&br_px=2476,1629&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=512,277)


11\. Choose the segment used as the fixed reference for reassortment inference (commonly HA). Review the "Advanced options" and decide if there are any that you would like to change. Select two or more influenza segments to include in the analysis.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/e696db80-8883-43ee-9b7a-e31deb6a46b3/ascreenshot.jpeg?tl_px=0,428&br_px=2476,1813&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=285,277)


12\. The advanced options can be viewed here and include different tree sort settings. **Match Type**

- *Strain* (default): Matches sequences across segments by strain name (e.g., `A/Texas/32/2021`).

- *EPI_ISL_XXX*: Matches sequences by GISAID accession.

- *RegEx*: Allows users to enter a custom regular expression for sequence matching.


- **Inference Method**
  - *local* (default): Standard reassortment inference.

  - *mincut*: Determines the most parsimonious reassortment placement by cutting the reference tree into the smallest number of non-reassorting parts.
- **Reference Tree Inference Method**
  - *FastTree* (default): Fast approximate maximum-likelihood inference.

  - *IQ-Tree*: Recommended for greater accuracy in exchange for slightly longer run times.
- **Allowed Deviation**
  - Sets the maximum allowed deviation from the estimated substitution rate (default = 2).
- **P-value Threshold**
  - Sets significance level for reassortment detection (default = 0.001).
- **Estimate Molecular Clock Rates**
  - Optionally estimates separate clock rates for different segments.
- **Collapse Near-Zero Branches**
  - Collapses branches shorter than 1e-7 into multifurcations for cleaner tree representation.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/73c0a184-8edf-4187-9b58-939d044a6dfb/ascreenshot.jpeg?tl_px=96,471&br_px=2573,1856&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=524,444)


13\. Click "Submit" to run the job. A confirmation message will appear below the submission box indicating that the job has entered the queue.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/f035c361-9414-41fc-9019-53989cc28e2e/ascreenshot.jpeg?tl_px=118,471&br_px=2595,1856&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=524,305)


14\. Jobs can be monitored via the **Jobs** indicator at the bottom of any BV-BRC page. Click on jobs to see the completed job.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/c4d46106-0690-4d09-ae51-59d9926aa764/ascreenshot.jpeg?tl_px=125,471&br_px=2602,1856&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=1042,570)


15\. After the job completes, open the results by either:

- Double-clicking the job in the **Jobs** list, or

- Clicking the **View** button on the right-hand Action Bar.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/717c7cc7-74b1-4596-8d32-f86fa6061110/ascreenshot.jpeg?tl_px=8,0&br_px=2485,1384&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=524,81)


16\. Click "Parameters" to view the parameters that were set when the job was run.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-06/4190614a-6d74-4a25-bce2-fabbe38ea10f/user_cropped_screenshot.webp?tl_px=0,0&br_px=2476,1384&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=-14,172)


17\. Click the eyeball icon to view the job. This will take you to the summary of the analysis with visual links to all result files. Recommended as the first file to view, the index.html\
\
Other files include\
**reassortments.csv** -Table listing each strain, reassorted segments, and uncertainty indicators.

**&lt;output_name&gt;.tre** -Annotated reference tree in Nexus format.

**files/ -** Directory containing segment-specific intermediate results (e.g., alignments, rooted trees, regression plots).

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-06/f3ecdf0f-95de-47ab-8376-011e5488d2b8/user_cropped_screenshot.webp?tl_px=125,0&br_px=2602,1384&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=758,19)


18\. From the index.html file click the name for your annotated tree to view the annotated tree.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-06/c688e3b7-8ea7-4abe-bb16-f205e2b61862/user_cropped_screenshot.webp?tl_px=0,0&br_px=2602,1856&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=288,183)


19\. This is a view of the tree.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/0d88553c-0116-4558-9792-3186b49340f7/ascreenshot.jpeg?tl_px=0,471&br_px=2476,1856&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=416,339)


20\. Review the index file for the entire report.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-06/1bba58b1-2efd-41fa-b471-8eca29c33b36/user_cropped_screenshot.webp?tl_px=0,0&br_px=1918,1072&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=507,258)


21\. Click "PB2-input.fasta.aln" to view the input alignment file.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-06/16a346ad-c759-4f78-9854-030c591124bc/user_cropped_screenshot.webp?tl_px=0,0&br_px=1918,1072&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=87,259)


22\. Here is one view of the input fasta, specifically for PB2. You can view the input fasta for each segment.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-06/c94593ae-1bd9-434e-bdc7-a9b7011448e0/user_cropped_screenshot.webp?tl_px=0,0&br_px=2602,1856&force_format=jpeg&q=100&width=1120.0)


23\. Click "PB2-input.fasta.aln.dates.csv" to view that or any file related to the segments.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-06/96aa95a1-9d4d-46d2-ad33-08bafd00c8e1/user_cropped_screenshot.webp?tl_px=0,0&br_px=1918,1072&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=197,255)


24\. View the root-to-tip regressions as well. This can be downloaded and analyzed in the future.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/55b8b2d6-e914-4add-862f-5ee177042718/ascreenshot.jpeg?tl_px=0,550&br_px=1918,1623&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=487,277)


25\. Double-click "files" to view all of the output files. These flles can be reviewed, downloaded and accessed for the future.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-10-31/9c70a07a-63e9-4923-95af-3e1b47b01753/ascreenshot.jpeg?tl_px=0,176&br_px=2476,1561&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=89,277)


26\. Click your tree file to view the tree.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-11-06/5114e3e1-234d-4d87-bd43-43a835c965ef/user_cropped_screenshot.webp?tl_px=0,122&br_px=2476,1507&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/0EA5E9_standard.png&wat_pad=41,277)
#### [Made with Scribe](https://scribehow.com/shared/Run_TreeSort_Analysis_and_View_Results__qQWNisfuT5WM4gNm7TRgPw)


