const CV_LINK =
  'https://drive.google.com/uc?export=download&id=1wuibB821wePCKiF6Uy66dn623g7eW39g' as const;

const FILE_NAME = 'CV-Stefano-Biddau.pdf' as const;

export const downloadCv = async () => {
  try {
    const link = document.createElement('a');
    link.href = CV_LINK;
    link.setAttribute('download', FILE_NAME);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Simulare l'asincronicità con un timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  } catch (error) {
    console.error('Errore during download', error);
    return false;
  }
};
