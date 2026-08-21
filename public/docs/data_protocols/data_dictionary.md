# BV-BRC Data Dictionary

* **antibiotics** -	Chemical, pharmacological and mechanistic details for antibacterial agents used in AMR analytics and clinical-isolate annotation.
* **bioset** - Represents a contrast or set of statistically significant entities (genes, proteins, metabolites, etc.) derived from an experiment — typically a differential-expression list or time-point cluster.
* **bioset_result** - Stores per-entity quantitative results (counts, log2 FC, p-values, z-scores…) that belong to a bioset so BV-BRC can render volcano plots, heat maps and enrichment tables.
* **enzyme_class_ref** - Provides the authoritative mapping between EC numbers, their official textual descriptions, and corresponding GO terms, enabling enzyme look-ups and pathway annotation.
* **epitope** - Captures experimentally verified immune epitopes mapped to BV-BRC proteins, including sequence, host context, assay counts and taxonomy.
* **epitope_assay** - Holds detailed experimental assay records (B-cell, T-cell, MHC binding, etc.) linked to epitopes, with measurement values, host data and literature citations.
* **experiment** - High-level metadata for functional-omics experiments (transcriptomics, proteomics, metabolomics, etc.), linking them to biosets, genomes, treatments and publications.
* **feature_sequence** - Canonical raw sequence for every unique gene, RNA or protein encoded in BV-BRC genomes, keyed by MD5 for rapid identity checks and deduplication.
* **gene_ontology_ref** - Maps GO identifiers to names, definitions and ontology namespaces so BV-BRC can annotate features and run GO-term enrichment.
* **genome** - Rich sample, assembly and annotation metadata for every genome in BV-BRC, powering search, filters and downstream analyses across ∼1 M assemblies.
* **genome_amr** - Antimicrobial-resistance phenotype and/or genotype evidence linked to each genome, including lab methods, computational predictions and literature support.
* **genome_feature** - All annotated features—coding genes, RNAs, repeats—across BV-BRC genomes, with coordinates, functional annotation and family membership.
* **genome_sequence** - Every nucleotide replicon (chromosome, plasmid, contig, viral segment, etc.) associated with a genome, with sequence, quality metrics and ACL information.
* **id_ref** - Cross-walk table linking BV-BRC features to external identifier systems (NCBI GeneID, Ensembl, Pfam, etc.) for inter-database annotation and search.
* **misc_niaid_sgc** - Tracks gene/protein targets selected by the NIAID Structural Genomics Centers, indicating clone/protein availability and project status.
* **pathway	Maps** - enzyme-encoding features in a genome to Pathway Tools / MetaCyc pathways, enabling metabolic reconstructions and presence/absence matrices.
* **pathway_ref** - Master lookup linking each EC activity to its position on curated pathway diagrams plus global occurrence counts for enrichment statistics.
* **ppi** - Pairwise protein–protein interaction metadata (detection methods, scores, literature) for network visualisation and comparative interactomics.
* **protein_feature** - Domain, motif, signal-peptide and other protein-level annotations identified in CDS translations, with coordinates and statistical scores.
* **protein_family_ref** - Lookup for every PATRIC protein-family accession (PGFam / PLFam) with descriptive name and namespace.
* **protein_structure** - Metadata and file pointers for every PDB entry mapped to BV-BRC genomes, including experimental details and chain-to-gene mappings.
* **sequence_feature** - Per-genome sequence features such as SNPs, indels or peptide motifs, linking them to canonical definitions, evidence codes and literature.
* **sequence_feature_vt** - Tracks each specific variant form of a canonical sequence feature across genomes, recording prevalence and variant sequences.
* **serology** - Laboratory serology results linked to host metadata and matching viral genomes, enabling antibody-prevalence and vaccine-impact studies.
* **sp_gene** - Lists antimicrobial-resistance, virulence and other “specialty” genes detected in genomes, with evidence metrics and curated classifications.
* **sp_gene_ref** - Master reference catalogue of specialty-gene alleles (AMR, virulence, toxins) with drug associations and literature support.
* **spike_lineage** - Month-by-month statistics for SARS-CoV-2 Pango lineages (growth, prevalence, VOC status) and their defining spike mutations.
* **spike_variant** - Monthly global statistics for notable SARS-CoV-2 spike-protein variants (D614G, etc.) including prevalence, growth rate and lineage diversity.
* **strain** - Per-strain metadata for segmented viruses (esp. influenza), linking segment accessions, host/geographic info and genome records.
* **structured_assertion** - Machine-readable statements about genomic features (e.g. “gene confers ciprofloxacin resistance”) with evidence codes and citations.
* **subsystem** - Links individual genes in a genome to SEED subsystems and roles, enabling subsystem heat-maps and completeness metrics.
* **subsystem_ref** - Reference hierarchy for SEED subsystems, including descriptions, literature and role lists.
* **surveillance** - Rich epidemiological, clinical and environmental metadata linking genomes to patient or wildlife surveillance information.
* **taxonomy** - NCBI lineage metadata plus genome-derived statistics (genome count, GC content, etc.) for every taxonomic node represented in BV-BRC.
* **enzyme_class_ref** - Authoritative mapping between EC numbers, textual descriptions and GO terms for enzyme look-ups and pathway annotation.
* **pathway	Maps** - enzyme-encoding features to pathways enabling metabolic reconstructions.
