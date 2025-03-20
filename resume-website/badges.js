// badges.js
const BADGE_URLS = {
    python: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    r: "https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white",
    c: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
    cpp: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    pandas: "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    numpy: "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
    matplotlib: "https://custom-icon-badges.demolab.com/badge/Matplotlib-71D291.svg?style=for-the-badge&logo=matplotlib&logoColor=fff",
    scikitlearn: "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
    pytorch: "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
    tensorflow: "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
    keras: "https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white",
    aws: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    googlecloud: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
    hadoop: "https://img.shields.io/badge/Apache%20Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black",
    spark: "https://img.shields.io/badge/Apache%20Spark-FDEE21?style=for-the-badge&logo=apachespark&logoColor=black",
    cuda: "https://img.shields.io/badge/cuda-000000.svg?style=for-the-badge&logo=nVIDIA&logoColor=green",
    bash: "https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
    jwt: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
    jenkins: "https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white",
    mysql: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    oracle: "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
    git: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    github: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    gitlab: "https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white",
    bitbucket: "https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white",
    postman: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    jira: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
    confluence: "https://img.shields.io/badge/confluence-%23172BF4.svg?style=for-the-badge&logo=confluence&logoColor=white",
    slack: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
    spring: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
    swagger: "https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white",
    latex: "https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white",
    markdown: "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
    php: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
    html5: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    linux: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    windows: "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
    transformers: "https://img.shields.io/badge/Transformers-%23FFC107.svg?style=for-the-badge&logo=huggingface&logoColor=black",
    nlp: "https://img.shields.io/badge/NLP-%23FF6F00.svg?style=for-the-badge&logo=AmazonAWS&logoColor=white",
    spacy: "https://img.shields.io/badge/spaCy-%2300599C.svg?style=for-the-badge&logo=spacy&logoColor=white",
    nltk: "https://img.shields.io/badge/NLTK-%23121011.svg?style=for-the-badge&logo=python&logoColor=white",
    roberta: "https://img.shields.io/badge/RoBERTa-%23FF4081.svg?style=for-the-badge&logo=&logoColor=white",
    xml: "https://img.shields.io/badge/XML-767C52.svg?style=for-the-badge&logo=xml&logoColor=fff",
    yaml: "https://img.shields.io/badge/YAML-CB171E.svg?style=for-the-badge&logo=yaml&logoColor=fff",
    json: "https://img.shields.io/badge/JSON-000.svg?style=for-the-badge&logo=json&logoColor=fff",
    javascript: "https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=000",
    css: "https://img.shields.io/badge/CSS-1572B6.svg?style=for-the-badge&logo=css3&logoColor=fff",
    motoko: "https://img.shields.io/badge/Motoko-%23FF6F00.svg?style=for-the-badge&logo=AmazonAWS&logoColor=white"
  };
  
  // Apply the badge URLs to the correct <img> elements
  window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img[data-skill]").forEach((img) => {
      const skill = img.getAttribute("data-skill");
      if (BADGE_URLS[skill]) {
        img.src = BADGE_URLS[skill];
      }
    });
  });
  
  function showNoAccessMessage() {
    alert("I cannot share the code for this project.");
  }
  