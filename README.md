# Pan-genome analysis and visualization

In addition to vertical inheritance, bacteria frequently lose genes or take genes up from the environment. Even closely related bacterial genomes can differ in the presence of hundreds of genes and different genes don't necessarily share a common phylogeny since individual genes can been acquired from distant strains and species.
This mix of inheritance patterns makes phylogenetic analysis of bacteria challenging.

Although several stand-alone software are available for pan-genome analysis, visualization, analysis and exploration of pan-genomes remains challenging.

Pan-genome Analysis and Exploration (panX) is meant to facilitate pan-genome research with an easy-to-use and interactive platform to explore and analyze pan-genomic data.

panX displays the pan-genome using connected visual components including a gene table viewer, multiple alignment viewer, and phylogenetic tree viewers. The pan-genome data structures are prepared by our [pan-genome-analysis](https://github.com/neherlab/pan-genome-analysis) pipeline, that efficiently identifies orthologous clusters from large sets of genome sequences and pre-computes alignments, trees, and a number of informative statistics.

panX is available online at [pangenome.de](http://pangenome.de)

This repository refers to pan-genome visualization.

## Install npm packages:
```
npm install
```
## Concatenate and minify JS and CSS files:
```
gulp
```
## Start the server:
```
node ./bin/www
```
## Have fun!
```
http://localhost:8000/
```
This shows the beauty and power of the panX visualization and exploration, even if  [only one gene cluster](https://github.com/neherlab/pan-genome-visualization/tree/master/public/dataset/Sa/geneCluster) is included in the repository.
Moreover, for your own species:
## Send your own data to the local server
After finishing the pan-genome-analysis pipeline, please use the script [link-to-server.py](https://github.com/neherlab/pan-genome-analysis/blob/master/link-to-server.py)  to transfer your data to the local server. 
Notes: the paths in the script need to be customized.
```
python link-to-server.py YourSpecies
```
![panX](/web-demo.gif)

