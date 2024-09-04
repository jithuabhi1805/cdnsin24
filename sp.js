document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('patient-card');
    const annualIncomeElement = document.getElementById('annual-income');
    const annualIncome = parseFloat(annualIncomeElement.textContent);

    // Apply color based on annual income
    if (annualIncome < 20000) {
        card.classList.add('low-income');
    } else if (annualIncome < 75000) {
        card.classList.add('moderate-income');
    } else {
        card.classList.add('high-income');
    }

    // Generate QR code *before* the card is flipped
    const qrCodeElement = document.getElementById('qr-code');
    const qrCodeData = `Patient ID: 123456\nName: John Doe\nDOB: 01/01/1980\nGender: Male\nAddress: 123 Main St, Anytown, USA\nPhone: 123-456-7890\nEmail: john.doe@example.com\nBlood Type: O+\nIncome: 80000`;

    // Ensure qrCodeElement is not null
    if (qrCodeElement) {
        QRCode.toCanvas(qrCodeElement, qrCodeData, { width: 150 }, (error) => {
            if (error) {
                console.error('Error generating QR code:', error);
            } else {
                console.log('QR Code generated!');
            }
        });
    } else {
        console.error('QR code element not found.');
    }

    // Add click event listener to flip the card
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});