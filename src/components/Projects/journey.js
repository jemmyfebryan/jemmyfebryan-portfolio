const journeyData = [
    {
      "id": 12,
      "title": "Content Writer Bootcamp Teenuplive 2023",
      "imgPath": "https://i.imgur.com/D6VD34x.jpg",
      "description": "I joined the Teenuplive Content Writer Bootcamp 2023, where I acquired skills in identifying optimal keywords for website content creation, enhancing the website's SEO performance. I successfully completed all assignments and earned the certification.",
      "noRef": false,
      "refLink": "https://drive.google.com/file/d/1CIV2pw2YlXs34nqIaw7dGqrHFeDmngmv/view?usp=drive_link",
      "refName": "View Certificate",
      "tags": ["Certificate"]
    },
    {
      "id": 8,
      "title": "FIBA Player Efficiency Rating Analytics",
      "imgPath": "https://i.imgur.com/kPpezf2.png",
      "description": "Together with the Braincore Team, I contribute to the creation of a web-based analytics system for calculating basketball player efficiency ratings (PER) in FIBA. This analytics platform is developed using Python, and the web interface is powered by Flask, Python, and a bit of JavaScript.",
      "noRef": false,
      "refLink": "https://mvpod.megalogic.id/",
      "refName": "View Website",
      "tags": ["Python", "JavaScript", "Website"]
    },
    {
      "id": 7,
      "title": "绕口令 Kongres Nasional Kebudayaan Tiongkok 2023",
      "imgPath": "https://i.imgur.com/ImW8LAa.png",
      "description": "I joined KNKT (中国文化大会) 2023 as a contestant in the tongue twister contest (绕口令). It really tested my Mandarin skills, challenging me to speak the language with precision and agility. The experience was a great opportunity for me to improve and showcase my language abilities.",
      "noRef": false,
      "refLink": "https://drive.google.com/file/d/1dscHLnRB9huuNj68qAYDDCCQe_QO-OWH/view?usp=drive_link",
      "refName": "View Certificate",
      "tags": ["Mandarin", "Certificate"]
    },
    {
      "id": 6,
      "title": "Jemmy Febryan Portfolio Website",
      "imgPath": "https://i.imgur.com/Z90dwhH.png",
      "description": "I designed and built my own personal website, handling both the front-end and back-end using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. This website serves as a repository for my journey, recent projects, areas of expertise, and more.",
      "tags": ["JavaScript", "MERN", "Website"]
    },
    {
      "id": 5,
      "title": "4th National INTELLIGO Data Competition 2023",
      "imgPath": "https://i.imgur.com/qUS7TKz.png",
      "description": "I developed a model for Reinforcement Learning Human Feedback (RLHF) to address the challenges associated with shipping e-commerce products in Indonesia. This model comprises three components: Positive Negative Sentiment, Shipping Problem Classification, and a Human Feedback Model, which together form the core of my final RLHF solution.",
      "noRef": false,
      "refLink": "https://drive.google.com/file/d/1RIOy6vBf9XxAHHCQVvmMO4SgKqgkmu4P/view?usp=drive_link",
      "refName": "View Certificate",
      "tags": ["Python", "NLP", "AI/ML", "Certificate"]
    },
    {
      "id": 4,
      "title": "4th National IFEST Data Analytics Competition 2023",
      "description": "I devised a sentiment analysis model for detecting five emotions – Anger, Fear, Joy, Happiness, and Sadness – in Tweets. I conducted a comparative analysis, pitting my hybrid Transformer+CNN model against alternative models, ultimately achieving an impressive validation accuracy of 85.71%.",
      "tags": ["Python", "NLP", "AI/ML", "Certificate"]
    },
    {
      "id": 11,
      "title": "RISTEK Datathon 2023 Participant",
      "imgPath": "https://i.imgur.com/roUlqwD.jpg",
      "description": "I took part in the RISTEK Datathon 2023, where participants engaged in a timeseries forecasting competition. The challenge involved predicting vehicle speeds on roads to proactively manage and prevent traffic congestion.",
      "noRef": false,
      "refLink": "https://drive.google.com/file/d/1rxhdCW6OtdiKtukRR_uxcmKBt4XOBD2B/view?usp=drive_link",
      "refName": "View Certificate",
      "tags": ["Python", "AI/ML", "Certificate"]
    },
    {
      "id": 3,
      "title": "AI Psychological Test for Mahasiswa Wirausaha Staff Recruitment 2023",
      "imgPath": "https://i.imgur.com/VP9QzrG.png",
      "description": "I made a set of 30 psychological test questions and a Multi-Layer Perceptron (MLP) to train the model using responses from current staff in relation to their performance. Subsequently, I utilized this model to forecast the performance of potential new staff members.",
      "noRef": false,
      "refLink": "https://www.kaggle.com/code/jemmyfebryan/prediksi-kinerja-calon-staff-deep-learning",
      "refName": "View Kaggle",
      "tags": ["Python", "AI/ML"]
    },
    {
      "id": 2,
      "title": "20th National Big Data Competition 2023",
      "imgPath": "https://i.imgur.com/emueEFd.png",
      "description": "I developed a model for license plate number prediction based on images. I used cv2 for preprocessing the image dataset, followed by the construction of the model using a Convolutional Neural Network (CNN) architecture, achieving an accuracy of 97.89%.",
      "noRef": false,
      "refLink": "https://drive.google.com/file/d/1IZYJMjLZHFIA_DO2EmDSCM6lhBWc8Emt/view?usp=drive_link",
      "refName": "View Details",
      "tags": ["Python", "Computer Vision", "AI/ML"]
    },
    {
      "id": 1,
      "title": "Fingerprint Recognition for Fingerprint Test Automation",
      "imgPath": "https://i.imgur.com/SR6qMdA.png",
      "description": "I created a Windows GUI application for fingerprint type recognition as part of automating fingerprint testing at Bimbel Gracia Malang. I utilized a Convolutional Neural Network to develop the model and implemented the program using Python with Tkinter.",
      "tags": ["Python", "Computer Vision", "AI/ML"]
    },
    {
      "id": 9,
      "title": "Migii HSK 3 Certification Test",
      "imgPath": "https://i.imgur.com/an2GCg3.jpg",
      "description": "Achieving a score of 206/300, I earned a Migii HSK 3 Certificate and successfully passed the test. This accomplishment has heightened my enthusiasm to pursue further learning, particularly in preparing for the HSK 4 exam.",
      "noRef": false,
      "refLink": "https://drive.google.com/file/d/1PsK__1nUBTfC-OB75euvm-Zo4ejV4fPC/view?usp=drive_link",
      "refName": "View Certificate",
      "tags": ["Mandarin", "Certificate"]
    },
    {
      "id": 10,
      "title": "Google Data Analytics Specialization",
      "imgPath": "https://i.imgur.com/vuiSHiz.jpg",
      "description": "Published December 2022 No Expiration Date. Certification for the Baparekraf Digital Talent Facilitation Program 2022 Phase 2 Google Data Analyst.",
      "noRef": false,
      "refLink": "https://drive.google.com/file/d/1Nny-sDWWS_BiwbkSiPGV0jyl1wKMby0g/view?usp=drive_link",
      "refName": "View Certificate",
      "tags": ["Certificate"]
    }
]

export { journeyData }