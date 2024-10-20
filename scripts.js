function downloadResume() {
    // Show the confirmation alert
    const confirmDownload = confirm("Do you want to view and download the resume?");
    
    // If the user clicks "OK", start the download
    if (confirmDownload) {
        window.location.href = 'Rachel_Xiao.pdf';
    }
}