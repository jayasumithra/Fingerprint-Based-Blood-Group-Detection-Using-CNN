# 🩸 Fingerprint-Based Blood Group Detection Using CNN

## 📌 Overview

**Fingerprint-Based Blood Group Detection Using CNN** is a deep learning project that explores the possibility of predicting a person's blood group from fingerprint images using **Convolutional Neural Networks (CNNs)**.

The project uses fingerprint images as input and applies image preprocessing and deep learning techniques to classify the blood group associated with the fingerprint pattern.

> **Note:** This project is intended for academic and research purposes. It should not be used as a replacement for clinically approved blood-group testing.

---

## 🎯 Objectives

* To explore fingerprint-based blood group classification using deep learning.
* To preprocess fingerprint images for CNN-based classification.
* To train and evaluate different CNN architectures.
* To compare the performance of different deep learning models.
* To develop a simple approach for automated blood group prediction from fingerprint images.

---

## 🧠 Technologies Used

* **Python**
* **TensorFlow**
* **Keras**
* **Convolutional Neural Networks (CNN)**
* **OpenCV**
* **NumPy**
* **Matplotlib**
* **Scikit-learn**
* **Jupyter Notebook**

---

## 🏗️ CNN Models Used

The project contains implementations/models based on different CNN architectures:

* **AlexNet**
* **ResNet34**
* **VGG16**
* **LeNet**

These models are used to investigate and compare their classification performance on fingerprint images.

---

## 📂 Project Structure

```text
Fingerprint-Based-Blood-Group-Detection-Using-CNN/
│
├── code/
│   ├── Alexnet/
│   ├── Lenet/
│   ├── Resnet34/
│   └── Vgg16/
│
├── test/
│
├── dataset/
│
├── notebooks/
│
├── requirements.txt
├── .gitignore
├── README.md
└── ...
```

> The exact folders may vary depending on the current version of the project.

---

## ⚙️ How It Works

The general workflow of the project is:

```text
Fingerprint Image
       ↓
Image Preprocessing
       ↓
Image Resizing / Normalization
       ↓
CNN Model
       ↓
Feature Extraction
       ↓
Classification
       ↓
Predicted Blood Group
```

### 1. Input

A fingerprint image is provided to the system.

### 2. Preprocessing

The fingerprint image is processed before being given to the CNN. Typical preprocessing operations include:

* Image resizing
* Normalization
* Noise reduction
* Data augmentation

### 3. Feature Extraction

The CNN automatically extracts important visual features from the fingerprint image.

### 4. Classification

The extracted features are passed through fully connected/classification layers.

### 5. Prediction

The trained model predicts the corresponding blood-group class.

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/jayasumithra/Fingerprint-Based-Blood-Group-Detection-Using-CNN.git
```

### 2. Move into the project directory

```bash
cd Fingerprint-Based-Blood-Group-Detection-Using-CNN
```

### 3. Create a virtual environment

Windows:

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` is not available, the major packages required include:

```bash
pip install tensorflow keras opencv-python numpy matplotlib scikit-learn
```

---

## ▶️ Running the Project

After installing the dependencies, open the appropriate Python file or Jupyter Notebook from the project directory.

For example:

```bash
python <your_python_file>.py
```

Or start Jupyter Notebook:

```bash
jupyter notebook
```

Then open the required notebook and run the cells.

---

## 📊 Model Training

The CNN models are trained using fingerprint images belonging to different blood-group classes.

The general training process is:

```text
Dataset
   ↓
Train / Validation / Test Split
   ↓
Image Preprocessing
   ↓
CNN Training
   ↓
Validation
   ↓
Model Evaluation
   ↓
Blood Group Prediction
```

The models can be evaluated using metrics such as:

* Accuracy
* Precision
* Recall
* F1-score
* Confusion Matrix

---

## 📈 Results

The project investigates the performance of multiple CNN architectures for fingerprint-based blood-group classification.

| Model    | Purpose                                        |
| -------- | ---------------------------------------------- |
| AlexNet  | CNN-based image classification                 |
| LeNet    | Lightweight CNN architecture                   |
| ResNet34 | Deep residual CNN architecture                 |
| VGG16    | Deep CNN feature extraction and classification |

Actual performance values should be added here after evaluating the models on the final test dataset.

Example:

```text
Model       Accuracy
---------------------
AlexNet     XX.XX%
LeNet       XX.XX%
ResNet34    XX.XX%
VGG16       XX.XX%
```

---

## 🔬 Dataset

The model requires a dataset containing fingerprint images associated with blood-group labels.

The dataset should be organized in a format suitable for image classification, for example:

```text
dataset/
│
├── A+/
├── A-/
├── B+/
├── B-/
├── AB+/
├── AB-/
├── O+/
└── O-/
```

The quality, size, class balance, and labeling accuracy of the dataset can significantly affect model performance.

---

## ⚠️ Limitations

* Fingerprint patterns are not an established clinical method for determining blood group.
* Model predictions depend heavily on the quality and representativeness of the dataset.
* A trained model may not generalize well to fingerprint images from different populations or acquisition devices.
* Predictions should not be used for medical decisions or blood transfusion.
* Clinical blood-group testing should always be used when an accurate blood type is required.

---

## 🔮 Future Enhancements

Possible future improvements include:

* Increasing the size and diversity of the dataset.
* Improving fingerprint image preprocessing.
* Using transfer learning.
* Comparing additional CNN architectures.
* Hyperparameter optimization.
* Deploying the trained model as a web application.
* Developing a mobile application.
* Adding an API for prediction.
* Improving model interpretability using explainable AI techniques.
* Performing more rigorous validation on independent datasets.

---

## 👩‍💻 Project Purpose

This project was developed as an **academic/deep-learning research project** to study image classification and investigate whether fingerprint images contain patterns that could be associated with blood-group labels.

---

## 📜 Disclaimer

This project is intended **only for educational and research purposes**.

The predictions generated by this system must **not be considered medically reliable or clinically validated**. Blood group should be determined using medically approved laboratory methods, especially for blood transfusion and other medical procedures.

---

## 📄 License

This project is intended for educational and research use.

If you plan to distribute or commercially use this project, add an appropriate open-source license such as MIT after confirming that the dataset and any third-party code/models permit such use.

---

## ⭐ Acknowledgements

Thanks to the open-source machine-learning and deep-learning communities for providing frameworks and tools such as TensorFlow, Keras, OpenCV, NumPy, Matplotlib, and Scikit-learn.
