/* Em testes de desenvolvimento */

import React from "react";
import jsPDF from "jspdf";

const latestBalance = [
    { date: "12/07", description: "POSTO COMBUSTÍVEL", value: "200,00" },
    { date: "12/07", description: "SAQUE 24H 012345", value: "300,00" },
    { date: "14/07", description: "MERCADO 02323626", value: "275,00" },
];

button.addEventListener("click", () => {
    const pdf = new jsPDF();

    const lines = pdf.setFontSize(20).setFont("helvetica").setTextColor(255, 0, 0);
    pdf.text(100, 25, "CARTÃO MASTERCARD");

    const lines2 = pdf.setFontSize(16).setFont("helvetica").setTextColor(0, 0, 0);
    pdf.text(20, 50, "ÚLTIMOS LANÇAMENTOS");

    latestBalance.forEach(e => {
        pdf.text(20, 80, `${e.date} - ${e.description} - ${e.value}`);
    });

    pdf.save("cartao.pdf");
});

<button>Imprimir</button>;
