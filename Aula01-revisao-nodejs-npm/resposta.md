# Análise - Execução Server-side

O código possui execução exclusivamente Server-side porque utiliza o módulo nativo `os` do Node.js para acessar informações do sistema operacional.

O módulo `os` não está disponível no navegador. Além disso, o código é executado pelo Node.js no terminal, sem utilizar manipulação do DOM ou uma interface gráfica.

Dessa forma, o Node.js consegue acessar diretamente recursos do sistema operacional, como a plataforma utilizada, a memória total e a quantidade de CPUs.