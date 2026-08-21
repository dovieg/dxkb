.. _cli::p3-get-genome-sp-genes:


######################
p3-get-genome-sp-genes
######################


*******************************************************************
Return Specialty Genes of the Specified Type in One or More Genomes
*******************************************************************



.. code-block:: perl

     p3-get-genome-sp-genes.pl [options] property


This script returns specialty gene data for the genes in one of more genomes. 

If you are searching based on genome_id then genome_id should be passed as standard input to CLI command as in example below

p3-all-genomes --eq genome_id,83332.12 --attr genome_id | p3-get-genome-sp-genes amr --attr patric_id,antibiotics,antibiotics_class,classification,gene,genome_id,feature_id,patric_id

The script recognizes the following types
of specialty genes.


- amr
 
 Antibiotic Resistance
 


- human
 
 Human Homolog
 


- target
 
 Drug Target
 


- transporter
 
 Transporter
 


Parameters
==========


The positional parameter is the type of specialty gene desired.

The standard input can be overridden using the options in :ref:`cli-input-options`.

Additional command-line options are those given in :ref:`cli-data-options` and :ref:`cli-column-options` plus the following.


- fields
 
 List the available field names.
 


- typeNames
 
 List the available specialty gene types.
 
 ##TODO additional options
 



