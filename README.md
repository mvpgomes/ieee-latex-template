# IEEE-article-latex-template

<span>
<!-- LaTeX Logo -->
<img src="/figures/latex.png" width="200px" height="auto" hspace="20"/>
<!-- IEEE Logo -->
<img src="/figures/Ieee.jpg" width="200px" height="auto" hspace="20"/>
</span>

IEEEtran compliant LaTeX template. This document follows the official documentation provided at
the [IEEE](https://www.ieee.org/publications_standards/publications/authors/author_templates.html) and
the documentation developed by Michael Shell, the IEEEtran original author that provided a guide
``IEEEtran_HOWTO.pdf`` with all information needed to produce an IEEE compliant article in LateX.

The default configurations for this template are:

```latex
\documentclass[journal,twocolumn,letterpaper,10pt]{IEEEtran}
```
## Requirements:
* LateX: This will depend on your Operating System. You have to check how to install all Latex packages for your OS.
* Any text editor that supports LateX (e.g. [Atom](https://atom.io/), [Sublime Text](http://www.sublimetext.com/), [Emacs](https://www.gnu.org/software/emacs/), etc.)
* LaTeX plugins for your text editor (this is optional, but it will make your life easier).
I you use Atom (that is my case) the following ones are available:
  * [language-latex](https://atom.io/packages/language-latex)
  * [latex](https://atom.io/packages/latex)
  * [latexer](https://atom.io/packages/latexer)

## Usage
To use this template, you can simply fork or copy this repository and start working on it.

### Starting your Article
The first thing that you need to do is to update the article's title and author information at the ```variables.tex```
file.

```latex
% Article Title
\def \ArticleTitle{Your Article Title}
% Author name
\def \AuthorA{Your Name}
% Author email
\def \AuthorAemail{Your email}
% Institution
\def \InstitutionA{Your Institution}
```
If you article has multiple authors and/or institutions, you must edit this information at ```variables.tex```
file by defining new variables and updating the respective commands. The information regarding how to
have multiple authors/institutions is available at ``IEEEtran_HOWTO.pdf``.

### Abstract
The file for the article abstract are located in  ```abstract/abstract.tex```. To define your abstract
just edit that file.

### Keywords
The file for the article keywords are located in  ```keywords/keywords.tex```. To define your keywords
just edit that file.

### Sections
Sections are located at ```sections```folder.
To create a new section, you first need to create a file in this folder.
The easiest way to do this, is to create a new file file:

```sh
$ touch sections/your_section_name.tex
```

In the new file, change the section's title and label.

Now you just need to include this new section in the main file in ```section``` folder.
Open ```section/main.tex``` file and add the include for the new section:

```latex
\input{sections/your_section_name}
```

Now get to work and start writing your article.

### Figures
Image files go to ```figures``` directory.
Place your files here and include them in the body of your document.

### Bibliography
The bibliography is in a ``.bib`` file located at ```bibliography/article.bib```.

The IEEEtran specification requires that to print the article bibliography you must have at least
one citation in you document, otherwise you will get a compilation error. To fix that issue we
define the ``hasBibliography`` variable that us located at the variables file:

```latex
\def \hasBibliography{1}
```
The default value specifies that the bibliography must be generated. If you don't want, just that change the variable value to 0.

To cite a bibliography entry in your document you can use the following command, as demonstrated
in ```sections/introduction.tex```:

```latex
\cite{johndoe}
```

### Acronyms
The list of acronyms is located at ```acronyms/acronyms.tex```.  To define a new acronym in your document you must define the new entry in that file:

```latex
\newacronym{<label>}{<abbreviation>}{<full>}
```
To reference an acronym you can use:

```latex
\gls{<label>}
```
If you are referring the acronym for the first time it will show in you document the ```<abbreviation>``` and
```<full>``` tags. At the remaining references it will show only the ```<abbreviation>``` tag.

To reference an acronym in the plural form you can use the following command:

```latex
\glspl{<label>}
```

The full documentation of the ```acronyms``` package is available at [LaTeX Glossary Wiki](https://en.wikibooks.org/wiki/LaTeX/Glossary)

## Compile
You have some ways to create the final pdf:

### Using the text editor
It depends on the text editor you are using.
If you are using Atom and the LaTeX plugin, just press
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd>

### Using the provided scripts
If you have the complete LateX environment installed, you can run the ```toPDF.sh``` script to generate the PDF (```article.pdf```):
```
$ sh toPDF.sh
```

To clean the files generated at the compilation process, you can run ```clean.sh``` script:
```
$ sh clean.sh
```

### Using Grunt
Using Grunt is optional, but if you choose to use these option you will make the development of you document much more efficient, since that each time that a ``.tex`` file is saved, the whole document is compiled again. The requirements to use Grunt are:

- [NodeJS](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Grunt-CLI](http://gruntjs.com/)

After install this components you need to change to the project's root directory and install
the project dependencies by running:
```
$ npm install
```
And then you already can run Grunt:
```
$ grunt
```
Now you can edit you LateX document. When you save the changes, your document will be compiled automatically.

NOTE: If you are using grunt you must not delete the ```toPDF.sh``` and ```clean.sh``` because it uses those scripts.

### Using the Makefile
There is a ```Makefile``` in the project's root.
If you have `pdflatex` and `bibtex` executables available on your 'Path' you can use this make file.
Simply run:
```
$ make
```

To clean all the mess generated by the compilation process you can run:
```
$ make clean
```

### Using an online tool
If you don't want to install anything and just want to use an online editor you can also use this template.

For instance, [Overleaf](https://www.overleaf.com) is a LateX online editor. You just need to create an account
and import the files on this template to it, or use one of the IEEE templates that Overleaf provides.

NOTE: If you chose to use a template already provided by Overleaf, the template structure will be a little
different. If you want to keep your article document structure more organized, we recommend that you use
this template.

### Contribute
This an open-source template and you can help to improve them.

If you detected some error(s) or have some suggestions to improve the document feel free to open an issue and make a pull request.

Thanks to [@samfcmc](https://github.com/samfcmc) who did most of the work. The scripts and general structure  of this template were based
oh his [llns-article-template](https://github.com/samfcmc/llncs-article-template).
