const CLOUD_NAME = 'dws0ppoax';  // Replace with your Cloudinary cloud name
const UPLOAD_PRESET = 'g3bevrt4';  // Replace with your Cloudinary upload preset

function uploadFiles() {
    const files = document.getElementById('fileInput').files;
    const previewArea = document.getElementById('previewArea');

    previewArea.innerHTML = ''; // Clear the preview area

    Array.from(files).forEach(file => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET); // Required for unsigned uploads

        // Upload to Cloudinary
        axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            const fileUrl = response.data.secure_url;
            const newElement = document.createElement(file.type.startsWith('image/') ? 'img' : 'video');
            newElement.src = fileUrl;
            newElement.style.width = '280px';
            newElement.style.height = '180px';
            if (file.type.startsWith('video/')) {
                newElement.controls = true;
            }
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.appendChild(newElement);
            previewArea.appendChild(serviceCard);
        })
        .catch(error => console.error('Error uploading to Cloudinary:', error));
    });
}
