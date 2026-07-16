import FrontendInterviewHeadder from "@/components/InterviewComponent/FrontendInterviewHeadder";
import InterviewQuestion from "@/components/InterviewComponent/InterviewQuestion";

const AiInterviewPage = () => {

    const questions = [
        {
            "id": 1,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Supervised ebong Unsupervised Learning er moddhe pradho-kyo ki?",
            "answer": "Supervised learning e labeled data (input ebong output dutoই thake) use kora hoy, jemon house price prediction. Ar unsupervised learning e unlabeled data use kore data er moddhe kono pattern ba cluster khoja hoy, jemon customer segmentation."
        },
        {
            "id": 2,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Overfitting ki ebong eti kivabe dhor kora jay?",
            "answer": "Jokhoni kono model training data khub valo shikhe fele kintu notun data te valo perform kore na, take overfitting bole. Eti dhor korar jonno regularization (L1/L2), dropout, cross-validation, ba aro besi training data use kora jay."
        },
        {
            "id": 3,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Underfitting bolte ki bujho?",
            "answer": "Jokhon model ti training data er moddhe thaka underlying pattern tii thik moto shikhter pare na (khub e simple model hole), take underfitting বলে। Model complexity bariye ba feature engineering kore eti thik kora jay."
        },
        {
            "id": 4,
            "level": "Beginner",
            "category": "Metrics",
            "question": "Classification model er jonno Accuracy, Precision, ebong Recall er moddhe tofat ki?",
            "answer": "Accuracy holo mot prediction er moddhe koiti thik hoyeche। Precision holo true positive divided by total predicted positive (vua prediction komano)। Recall holo true positive divided by total actual positive (real positive miss na kora)।"
        },
        {
            "id": 5,
            "level": "Beginner",
            "category": "Metrics",
            "question": "F1-Score ki ebong eti kokhon proyojon hoy?",
            "answer": "F1-Score holo Precision ebong Recall er Harmonic Mean. Jokhon dataset e class imbalance thake (jemon: 99% data positive, 1% negative), tokhon shudhu accuracy diye model judge na kore F1-score dekha hoy."
        },
        {
            "id": 6,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Linear Regression er main assumption gulo ki ki?",
            "answer": "Linear relationship thakte hobe, homoscedasticity (constant variance of errors), independence of residuals, ebong normality of error distribution."
        },
        {
            "id": 7,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Logistic Regression ki classification naki regression algorithm?",
            "answer": "Eti name 'Regression' holeo eti asole ekta Classification algorithm, ja kono ghotona ghotar probability (0 theke 1 er moddhe) ber kore output classification prodan kore."
        },
        {
            "id": 8,
            "level": "Beginner",
            "category": "Data Preprocessing",
            "question": "Data normalization ebong standardization er moddhe parthokyo ki?",
            "answer": "Normalization data ke 0 theke 1 er range e niye ase (Min-Max Scaling)। Standardization data er mean 0 ebong standard deviation 1 kore (Z-score scaling)।"
        },
        {
            "id": 9,
            "level": "Beginner",
            "category": "Data Preprocessing",
            "question": "Dataset e missing value thakle tumi kivabe handle korbe?",
            "answer": "Missing values drop kora jay (jodi data choto hoy), ba Imputation kora jay mean/median/mode use kore, athoba advanced algorithm jemon KNN Imputer use kora jay."
        },
        {
            "id": 10,
            "level": "Beginner",
            "category": "Deep Learning",
            "question": "Activation Function ki ebong keno eti proyojon?",
            "answer": "Activation function neural network er moddhe non-linearity introduce kore. Eta chara neural network shudhu ekta giant linear regression er moto kaj korbe, ja complex pattern shikhter parbe na."
        },
        {
            "id": 11,
            "level": "Beginner",
            "category": "Deep Learning",
            "question": "Popular koyekti Activation Function er nam bolo.",
            "answer": "ReLU (Rectified Linear Unit), Sigmoid, Tanh, ebong Softmax (mainly multi-class classification er output layer e use hoy)."
        },
        {
            "id": 12,
            "level": "Beginner",
            "category": "Deep Learning",
            "question": "Gradient Descent ki?",
            "answer": "Gradient Descent holo ekta optimization algorithm ja loss function ke minimize korar jonno model er weights gulo ke iteratively update kore."
        },
        {
            "id": 13,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Bias-Variance Tradeoff bolte ki bujho?",
            "answer": "High Bias mane model ti khub simple (underfitting)। High Variance mane model training data er proti khub sensitive (overfitting)। Bias-Variance tradeoff holo emon ekta point khoja jekhane eii duter moddhe balance thake ar total error সর্বনিম্ন হয়।"
        },
        {
            "id": 14,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "K-Means Clustering kivabe kaj kore?",
            "answer": "Eti ekta unsupervised learning algorithm. Prothome K shongkhok centroid randomly select kora hoy, tarpor protiti data point ke tar kacher centroid e assign kore cluster banano hoy, ebong eii process repeat kora hoy centroid fix na hawa porjonto."
        },
        {
            "id": 15,
            "level": "Beginner",
            "category": "Data Preprocessing",
            "question": "Categorical data ke numerical data te convert korar upay ki?",
            "answer": "One-Hot Encoding (nominal data er jonno) ebong Label Encoding / Ordinal Encoding (ordered data er jonno)."
        },
        {
            "id": 16,
            "level": "Beginner",
            "category": "Deep Learning",
            "question": "Epoch, Batch Size, ebong Iteration er moddhe tofat ki?",
            "answer": "Epoch: purno dataset ekbar model er moddhe diye jawar prokriya. Batch Size: ekbare jotho gulo data point model dekhe weight update kore. Iteration: ekta epoch sesh korte joto gulo batch lage."
        },
        {
            "id": 17,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Random Forest algorithm ki?",
            "answer": "Eti ekta ensemble learning method ja onek gulo Decision Tree algorithm eksathe ektro kore (Bagging method) final voting ba average er maddhome result prodan kore."
        },
        {
            "id": 18,
            "level": "Beginner",
            "category": "Evaluation",
            "question": "Confusion Matrix ki?",
            "answer": "Eti ekta table ja classification model er performance visualization e sahajjo kore. Ekhane True Positive (TP), True Negative (TN), False Positive (FP), ebong False Negative (FN) er hiseb thake."
        },
        {
            "id": 19,
            "level": "Beginner",
            "category": "Data Preprocessing",
            "question": "Outlier ki ebong eti kivabe detect kora jay?",
            "answer": "Outlier holo dataset er emon kisu data point যা baki data theke osavabik rokom alada. Eti IQR (Interquartile Range) method, Box Plot, ba Z-score scaling diye detect kora jay."
        },
        {
            "id": 20,
            "level": "Beginner",
            "category": "NLP",
            "question": "NLP (Natural Language Processing) e Tokenization ki?",
            "answer": "Kono text ba sentence ke choto choto ongsho text words, subwords ba characters e vag korar prokriyake Tokenization bole."
        },
        {
            "id": 21,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "Vanishing Gradient Problem ki?",
            "answer": "Deep Neural Network e backpropagation er shomoy gradient jotho pichone jay totho choto hote hote pray shunno (0) hoye jay. Er fole shurur layer gulo r weight update hoy na ebong model sikhter pare na."
        },
        {
            "id": 22,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "Exploding Gradient Problem ki ebong eti kivabe solve kora jay?",
            "answer": "Vanishing gradient er ulto, jekhane gradient progressively boro hote hote unstable hoye jay. Eti Gradient Clipping ba Proper Weight Initialization (jemon He/Xavier) kore solve kora jay."
        },
        {
            "id": 23,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "CNN (Convolutional Neural Network) e Pooling Layer er kaj ki?",
            "answer": "Pooling layer feature map er spatial size (width & height) reduce kore, computation cost komay, ebong model ke translational invariance korte help kore (Max pooling/Average pooling)."
        },
        {
            "id": 24,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "RNN (Recurrent Neural Network) er limitation ki?",
            "answer": "RNN sequential data (text/time-series) handle korte parleও long-term dependency mone rakhte pare na short memory layer er karone, ebong vanishing gradient shomossha hoy."
        },
        {
            "id": 25,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "LSTM (Long Short-Term Memory) kivabe RNN er shomossha dur kore?",
            "answer": "LSTM e special 'Gates' (Input, Forget, Output gate) thake ja cell state er maddhome long-term information text context hold korte pare ebong gradient flow maintain kore."
        },
        {
            "id": 26,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Bagging ebong Boosting er moddhe main tofat ki?",
            "answer": "Bagging (jemon Random Forest) parallel e multiple independent trees train kore average output ney. Boosting (jemon XGBoost) sequentially tree toiri kore, jekhane poroborti tree ager tree er error ke correct korar chesta kore."
        },
        {
            "id": 27,
            "level": "Intermediate",
            "category": "Generative AI",
            "question": "GAN (Generative Adversarial Network) kivabe kaj kore?",
            "answer": "GAN e duto network thake: Generator (ja fake data toiri kore) ebong Discriminator (ja real vs fake data chinnito kore)। Era eke oporer biruddhe protijogita kore model ke chomotkor fake images/data banate sekhay."
        },
        {
            "id": 28,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Feature Selection vs Feature Extraction - moddhe tofat ki?",
            "answer": "Feature Selection mane original feature components calculation variable computational list theke best gulo select kora (Filter, Wrapper methods)। Feature Extraction mane raw features modify kore notun compact dimensions toiri kora (jemon PCA)."
        },
        {
            "id": 29,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "PCA (Principal Component Analysis) kivabe kaj kore?",
            "answer": "PCA ekta dimensionality reduction technique. Eti high-dimensional data er variance maximum maintain kore orthogonal axis (Principal Components) e project kore attributes num low dimensions e niye ase."
        },
        {
            "id": 30,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "Dropout Layer er function ki?",
            "answer": "Training er shomoy randomly kisu neuron ke nishkriyo (drop) kore deya hoy. Er fole network er neurons gulo co-dependency te pore na, ja overfitting reduce kore."
        },
        {
            "id": 31,
            "level": "Intermediate",
            "category": "Evaluation",
            "question": "ROC-AUC Curve bolte ki bujho?",
            "answer": "ROC curve holo True Positive Rate (Sensitivity) vs False Positive Rate (1-Specificity) er plot. AUC (Area Under Curve) diye classification efficiency protifolito hoy. 1 mane perfect model."
        },
        {
            "id": 32,
            "level": "Intermediate",
            "category": "NLP",
            "question": "Word Embedding ki? Koyekti embedding model er nam bolo.",
            "answer": "Text vectors numbers converting logic math wrapper text data vocabulary context semantic mapping vector value output e transformation dynamic method. Word2Vec, GloVe, FastText eii algorithm templates provide kore."
        },
        {
            "id": 33,
            "level": "Intermediate",
            "category": "Data Preprocessing",
            "question": "Data Imbalance problem dur korar common technique gulo ki?",
            "answer": "Resampling (Oversampling using SMOTE / Undersampling), Class Weights optimization, dynamic objective thresholds settings modeling implementation algorithm tweaks."
        },
        {
            "id": 34,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Cross-Validation keno proyojon? K-Fold cross-validation ki?",
            "answer": "Data specific single splits standard variance reduction evaluation checking matrix method. K-Fold configuration calculation variable logic dynamically loops dynamic cross metrics."
        },
        {
            "id": 35,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Regularization (L1 vs L2) er moddhe tofat bolo.",
            "answer": "L1 Regularization (Lasso) cost function feature parameters weight values logic logic sparsity checks calculation. L2 Regularization (Ridge) penalizes squared magnitudes optimization outputs smoothly weight variables control systems loops zero cross boundaries mapping definitions vectors updates context values logic weights values variables parameters constants structures standard."
        },
        {
            "id": 36,
            "level": "Intermediate",
            "category": "NLP",
            "question": "TF-IDF (Term Frequency-Inverse Document Frequency) ki?",
            "answer": "Eti ekta statistical tool যা nirdisto shobdo single text layer text dataset frequency density matching metric matrix dynamically weights values evaluations."
        },
        {
            "id": 37,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "Batch Normalization ki?",
            "answer": "Protiti intermediate mini-batch optimization internal covariance shift values tracking scaling parameters calculation. Eti training computation process accelerated optimization paths scaling maps handles variables inputs."
        },
        {
            "id": 38,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Support Vector Machine (SVM) algorithm er 'Kernel Trick' ki?",
            "answer": "Kernel Trick er maddhome non-linear low-dimensional input vectors context coordinates features calculation algorithmically space metrics parameters mappings transformations maps."
        },
        {
            "id": 39,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "Transfer Learning ki?",
            "answer": "Ager mathematical large-scale image text domain target weights datasets configurations optimized values mapping targets tasks reuse logic."
        },
        {
            "id": 40,
            "level": "Intermediate",
            "category": "Evaluation",
            "question": "Cross-Entropy Loss function ki?",
            "answer": "Classification modeling targets logic calculated predicted probabilities vector error distributions tracking minimization score output calculations variables targets optimization models."
        },
        {
            "id": 41,
            "level": "Advanced",
            "category": "Architectures",
            "question": "Transformer architecture er main mechanism ki?",
            "answer": "Self-Attention Mechanism. Eti inputs text elements matching token connections context variables context weight calculation vector space representations parallel calculations parallelization logic handle optimization models dynamically implementations."
        },
        {
            "id": 42,
            "level": "Advanced",
            "category": "Architectures",
            "question": "Self-Attention mechanism e Query, Key, ebong Value vector er kaj ki?",
            "answer": "Query vector lookups token text focus dynamic points index. Key vector elements match matrix dot product dynamic relevance scores extraction targets token weights evaluation values generation mappings."
        },
        {
            "id": 43,
            "level": "Advanced",
            "category": "LLMs",
            "question": "LLM (Large Language Model) fine-tuning er context e LoRA (Low-Rank Adaptation) ki?",
            "answer": "LoRA holo ekta Parameter-Efficient Fine-Tuning (PEFT) technique. Eti base model weight update parameters matrix matrices frozen logic adapters weights dimension factors lower mapping calculations resource allocation cost minimum logic execution dynamically."
        },
        {
            "id": 44,
            "level": "Advanced",
            "category": "LLMs",
            "question": "Quantization (jemon INT8, FP4) bolte ki bujho LLM inference optimization e?",
            "answer": "Model validation variables weights parameters float operations high precision structures bit representation arrays scaling models down targets values integers variables scaling resource compute size minimum tracking compression systems."
        },
        {
            "id": 45,
            "level": "Advanced",
            "category": "Architectures",
            "question": "Diffusion Models (jemon Intermediatejourney/Stable Diffusion) kivabe image generate kore?",
            "answer": "Forward diffusion process parameters reverse execution calculations matrix models. Pure gaussian noise artifacts context mappings structural tracking iteration text embedding generation pixels reconstructions vectors logic loops optimization."
        },
        {
            "id": 46,
            "level": "Advanced",
            "category": "Architectures",
            "question": "Encoder-Only vs Decoder-Only vs Encoder-Decoder Transformers er moddhe tofat ki?",
            "answer": "Encoder-Only (BERT) feature context tokens matching structures representation generation extraction variables logic tracking optimization maps. Decoder-Only (GPT series) auto-regressive next-token forecasting processing targets output generations loops. Encoder-Decoder (T5/BART) translation sequence transformation conversion target pipelines architectures implementations."
        },
        {
            "id": 47,
            "level": "Advanced",
            "category": "LLMs",
            "question": "RLHF (Reinforcement Learning from Human Feedback) ki?",
            "answer": "Human preference alignment systems target values evaluations dataset training systems rewards scaling mapping model optimization policies optimization alignment parameters algorithms values functions tracking evaluations patterns constraints validation configurations."
        },
        {
            "id": 48,
            "level": "Advanced",
            "category": "System Design",
            "question": "AI System Design e Vector Database (jemon Pinecone, Milvus) er role ki?",
            "answer": "High-dimensional embedding space values indexes clustering optimization metrics approximate nearest neighbor (ANN) similarity computation searching logic mapping indexing context targets values dynamically."
        },
        {
            "id": 49,
            "level": "Advanced",
            "category": "LLMs",
            "question": "RAG (Retrieval-Augmented Generation) pipeline ki?",
            "answer": "LLM text processing external knowledge base vectors databases lookups references contexts extractions injected templates logic integration data dynamic constraints validation pipeline architectures."
        },
        {
            "id": 50,
            "level": "Advanced",
            "category": "System Design",
            "question": "Model Drift (Data Drift vs Concept Drift) ki ebong eti kivabe track kora jay?",
            "answer": "Data Drift dynamic distribution statistical properties changes target inputs validation. Concept Drift tracking variables features actual structural correlation target variables patterns changing. Performance degradation thresholds anomaly scores mapping monitors logging components logic."
        },
        {
            "id": 51,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Decision Tree algorithm kivabe splitting criteria select kore?",
            "answer": "Information Gain, Gini Impurity, ba Entropy metrics evaluation parameters tracking split thresholds tracking points selection structures dynamically."
        },
        {
            "id": 52,
            "level": "Beginner",
            "category": "Math for AI",
            "question": "Linear Algebra er perspective theke Vector ebong Matrix er definition ki?",
            "answer": "Vector holo ekta 1D array parameters spatial direction values matrix optimization numeric representations 2D layout formats elements mapping configuration parameters transformations arrays."
        },
        {
            "id": 53,
            "level": "Beginner",
            "category": "Python for AI",
            "question": "NumPy array keno Python standard list er theke fast?",
            "answer": "NumPy arrays contiguous memory allocation layouts control algorithms systems optimizations operations execution speed vectors calculations internal C compilation mapping layers structures speeds optimization libraries tracking elements algorithms implementations."
        },
        {
            "id": 54,
            "level": "Beginner",
            "category": "Data Preprocessing",
            "question": "Data leak (Data Leakage) ki?",
            "answer": "Training calculations validations pipeline configurations test evaluation validation elements components leaking information context distributions optimization models validation scaling anomalies algorithms inputs leaks parameters systems."
        },
        {
            "id": 55,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Supervised learning algorithm er dynamically standard parameters K-Nearest Neighbors (KNN) logic updates parameter checks scaling attributes distance matrix tracking properties metrics implementations?",
            "answer": "KNN distance algorithms evaluation metrics validation structures Euclidean distance calculation nearest neighbors counts labels voting classifications outputs mapping features values."
        },
        {
            "id": 56,
            "level": "Beginner",
            "category": "Metrics",
            "question": "MSE (Mean Squared Error) vs MAE (Mean Absolute Error) er moddhe Regression model valuation rules differences points ki?",
            "answer": "MSE absolute squared target variance tracking points penalty scales outlier transformations high impacts configurations. MAE linear values structures calculations balance patterns metrics definitions indicators."
        },
        {
            "id": 57,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Parametric vs Non-parametric models er tofat ki?",
            "answer": "Parametric models explicitly assumptions functional forms target mappings numbers parameters constant bounds (Linear Regression). Non-parametric shapes variations models dynamic flexibilities expansion dataset dimensions tracking logic (SVM/Decision Trees)."
        },
        {
            "id": 58,
            "level": "Beginner",
            "category": "Data Preprocessing",
            "question": "Imbalanced dataset classification evaluation errors parameters metric check accuracy traps components details?",
            "answer": "Accuracy optimization metrics look misleadingly high values distributions samples matching dominant group values masking core failure attributes validation rules tracking paths."
        },
        {
            "id": 59,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Clustering methods e Silhouette Score ki evaluation indicators context parameters?",
            "answer": "Silhouette Score indicates how close validation objects internal cluster distances separation factors boundaries validation indicators range -1 to 1 points values metrics logic trackers."
        },
        {
            "id": 60,
            "level": "Beginner",
            "category": "Computer Vision",
            "question": "Image data preprocessing pixel normalization values why essential ranges configurations?",
            "answer": "Pixel configurations scaling boundaries uniform scale gradient calculation optimization convergences networks fast features representations mappings."
        },
        {
            "id": 61,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Ensemble learning e Stacking technique dynamic logic definitions pipelines templates?",
            "answer": "Stacking processes base level distinct estimators outcomes combination validation meta-model processing predictions final classifier layer logic architectures implementations."
        },
        {
            "id": 62,
            "level": "Intermediate",
            "category": "Optimization",
            "question": "Stochastic Gradient Descent (SGD) vs Adam Optimizer features components tracking implementations?",
            "answer": "SGD single updates computational tracking variance parameters loops trajectory loops. Adam adaptive learning rate optimization calculations dynamic momentum tracking combinations weights adjustments speeds elements validation updates."
        },
        {
            "id": 63,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "1x1 Convolution pipeline patterns CNN architectural properties models systems validations?",
            "answer": "1x1 Conv filters dimensional reduction tracking spatial metrics channels operations feature mappings feature integrations maps reduction strategies weights logic layers configuration computations."
        },
        {
            "id": 64,
            "level": "Intermediate",
            "category": "NLP",
            "question": "Attention mechanism sequence processing context models RNN hidden state bottlenecks solve targets methods?",
            "answer": "Traditional sequence models fixed vector limits tracking contexts intermediate steps parameters computation dynamic global calculations connections weights calculation extraction properties tokens directly representations."
        },
        {
            "id": 65,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Gradient Boosting Machine (GBM) vs XGBoost technical performance gaps optimization features parameters structures?",
            "answer": "XGBoost optimization parameters internal regulation penalties execution speed system tracking parallelization cache structures handling tree split calculations dynamically high performance systems scaling vectors logic layers."
        },
        {
            "id": 66,
            "level": "Intermediate",
            "category": "Math for AI",
            "question": "Eigenvalues and Eigenvectors AI dimensionality reduction PCA transformations significance attributes values?",
            "answer": "Eigenvectors show direction geometric matrices linear operations transformations dynamic scaling variances representation metrics coordinates. Eigenvalues scales transformation magnitudes indicator coefficients components identification parameters."
        },
        {
            "id": 67,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "Autoencoders operational architectural concepts use cases metrics definitions details?",
            "answer": "Autoencoders compression target bottleneck representations mappings latent code structural data mapping dimensional parameters algorithms. Anomaly detection configurations noise cancellation systems target features processing validations paths models."
        },
        {
            "id": 68,
            "level": "Intermediate",
            "category": "NLP",
            "question": "BERT model pre-training objectives parameters logic components calculations descriptions?",
            "answer": "Masked Language Modeling (MLM) missing tokens hidden forecasting. Next Sentence Prediction (NSP) text pair correlation validation calculations bidirectional feature space analysis components weights."
        },
        {
            "id": 69,
            "level": "Intermediate",
            "category": "Computer Vision",
            "question": "Object Detection contexts Intersection over Union (IoU) metric tracking optimization metrics calculations logic?",
            "answer": "IoU overlap calculation area intersection divided by area union prediction boxes vs ground truth bounds ratios threshold parameters validation metrics classifications outputs trackers."
        },
        {
            "id": 70,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "Learning Rate Schedules (Decay) optimization strategies parameters paths?",
            "answer": "Training parameters convergence paths adaptive optimization dynamically drops learning rate coefficients step by step local minima plateau configurations escape tracking functions."
        },
        {
            "id": 71,
            "level": "Advanced",
            "category": "Architectures",
            "question": "Vision Transformers (ViT) vs Convolutional Neural Networks (CNN) internal structural inductive biases structural differences constraints components architectures?",
            "answer": "CNN translation equivariance locality inductive biases patterns local parameters feature tracking extraction layers directly. ViT global context calculation patch transformations self-attention templates scalability high performance massive data training limits architectures parameters maps."
        },
        {
            "id": 72,
            "level": "Advanced",
            "category": "System Design",
            "question": "Distributed Model Training strategies Data Parallelism vs Model Parallelism orchestration architecture scale configurations parameters rules?",
            "answer": "Data Parallelism replicates full model layers multi-device batches inputs splits aggregation gradients sync patterns loops variables execution. Model Parallelism sections vertical/horizontal pipeline splitting architectures hardware processing multi-layered systems limits limits memory blocks configurations."
        },
        {
            "id": 73,
            "level": "Advanced",
            "category": "LLMs",
            "question": "KV Cache optimization LLM inference latency reductions tracking execution engineering patterns architectures mechanisms?",
            "answer": "Attention steps past tokens Query/Key/Value key metrics matrices states buffering storage computational repetition bypass dynamic lookup execution generation phase acceleration pipelines metrics optimization processes blocks."
        },
        {
            "id": 74,
            "level": "Advanced",
            "category": "LLMs",
            "question": "FlashAttention mathematical optimization computational trick speed improvements systems implementation details architectures memory architectures?",
            "answer": "SRAM GPU high-speed local buffering minimization standard global GPU memory IO bottlenecks tile calculation algorithms fused kernel pipelines matrix operations speed updates without precision drops parameters constraints implementations."
        },
        {
            "id": 75,
            "level": "Advanced",
            "category": "System Design",
            "question": "AI model deployment quantization aware training (QAT) vs post-training quantization (PTQ) comparative engineering metrics evaluations?",
            "answer": "PTQ standard models float configuration direct translations weight bit conversions quick calibration models performance drops. QAT models loss calculation loops simulate precision bounds constraints weight updates dynamically fine-tune high accuracy target environments retention configurations."
        },
        {
            "id": 76,
            "level": "Advanced",
            "category": "Architectures",
            "question": "Mixture of Experts (MoE) transformer layer routing mechanics computing efficiency advantages definitions patterns architectures?",
            "answer": "Gating network router tokens distribution specialized sub-networks internal models dynamically processing select branches calculation activation partial model structures massive total parameter count active token counts minimal logic executions operational costs parameters bounds control."
        },
        {
            "id": 77,
            "level": "Advanced",
            "category": "LLMs",
            "question": "Hallucination mitigation LLM system architectures engineering programmatic frameworks patterns verification methods implementations?",
            "answer": "Knowledge graph verification pipelines, self-consistency polling frameworks ensemble validations verification layers external document attribution confidence thresholds outputs evaluation guardrails."
        },
        {
            "id": 78,
            "level": "Advanced",
            "category": "System Design",
            "question": "High-throughput serving inference engines vLLM PagedAttention dynamic memory allocation mapping principles algorithms designs?",
            "answer": "Virtual memory paging system architectures logic fragmentation dynamic boundaries storage structures KV caching configurations dynamic block pointers hardware optimization techniques maximize batch throughput parameters tracking implementations."
        },
        {
            "id": 79,
            "level": "Advanced",
            "category": "Math for AI",
            "question": "KL Divergence (Kullback-Leibler) probabilistic distributions metrics relative entropy information values definitions objective functions targets optimizations?",
            "answer": "KL Divergence measuring distance calculations how probability target distributions diverging from baseline theoretical models loss objectives tracking standard models optimization functions parameters implementations optimization."
        },
        {
            "id": 80,
            "level": "Advanced",
            "category": "Generative AI",
            "question": "Reinforcement Learning DPO (Direct Preference Optimization) vs PPO architectural differences complexity reductions attributes implementations?",
            "answer": "PPO actor-critic value network policy loops reward modeling complex tracking multi-stage processing systems stability concerns. DPO mathematically optimizes closed-form implicit optimization directly preferences targets token equations loss updates parameters simplicity optimizations architectures."
        },
        {
            "id": 81,
            "level": "Beginner",
            "category": "Math for AI",
            "question": "Probability Theory Central Limit Theorem (CLT) data analysis significance properties algorithms models applications?",
            "answer": "CLT dictates sample size growth means tracking distribution samples approaches Gaussian Normal Distribution shapes irrespective underlying population layout profiles parameter tests validation basis implementations."
        },
        {
            "id": 82,
            "level": "Beginner",
            "category": "Python for AI",
            "question": "Pandas dataframe merge vs join vs concat difference operations data manipulation workflows?",
            "answer": "Merge relational column index database style intersection matching lookups logic. Join structural index mapping based combination properties tracks. Concat stacks objects axis boundaries sequence tracking vertical horizontal expansion operations."
        },
        {
            "id": 83,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Hyperparameters vs Parameters difference definitions optimization models?",
            "answer": "Parameters internal configurations model derived training weights values metrics (intercepts coefficients). Hyperparameters external rules settings structure configured user before execution loops (Learning rate, architecture layout estimators depth parameters)."
        },
        {
            "id": 84,
            "level": "Beginner",
            "category": "Data Preprocessing",
            "question": "Data encoding nominal vs ordinal text classification properties variables definitions targets?",
            "answer": "Nominal text parameters structures unordered values category tracking items (Colors, Cities). Ordinal represents implicit structural sequence orders hierarchies comparison ranking metrics variables values (Low, Medium, High rankings representations)."
        },
        {
            "id": 85,
            "level": "Beginner",
            "category": "Evaluation",
            "question": "Regression metrics R-squared (Coefficient of Determination) evaluation scope tracking indicator definitions?",
            "answer": "R-squared shows total proportion variation predictions targets explained features sets. Scale 0 to 1 baseline comparisons indicate performance tracking fits variables profiles tracking data matching scores."
        },
        {
            "id": 86,
            "level": "Beginner",
            "category": "Computer Vision",
            "question": "Image classification spatial transformations data augmentation techniques keno perform kora hoy?",
            "answer": "Data augmentation artificially expands data diversity via rotations flips zoom color shifts preventing overfit patterns maximizing generalization capacity tracking models spatial structures."
        },
        {
            "id": 87,
            "level": "Beginner",
            "category": "Machine Learning Basics",
            "question": "Naive Bayes Classifier core mathematical assumption check boundary logic components models?",
            "answer": "Eti Bayes Theorem use kore class allocation models optimization calculates. Core assumption attribute properties variables conditionally independent completely target indicators context variables implementations."
        },
        {
            "id": 88,
            "level": "Beginner",
            "category": "Metrics",
            "question": "Log Loss evaluation parameters objective definition tracking profiles types classification models?",
            "answer": "Log Loss measures prediction probability variance target levels penalizes uncertainty heavily tracking actual binary multi class targets parameters optimization metric structures trackers."
        },
        {
            "id": 89,
            "level": "Beginner",
            "category": "Data Preprocessing",
            "question": "Feature scaling algorithm variants distance mapping dependent architectures requirement constraints descriptions?",
            "answer": "Distance tracking algorithms (KNN, SVM, K-Means) scale variant attributes balance mapping optimizations speed convergence checks systems parameters uniformity constraints pipelines implementations."
        },
        {
            "id": 90,
            "level": "Beginner",
            "category": "Deep Learning",
            "question": "Multilayer Perceptron (MLP) core forward propagation chain matrix operations tracking sequences concepts descriptions?",
            "answer": "Input layer vector multiplication weight matrix addition bias vector feeding directly validation non-linear activations cascading target sequence structural patterns layers until output vector validation extraction maps."
        },
        {
            "id": 91,
            "level": "Intermediate",
            "category": "Generative AI",
            "question": "Variational Autoencoders (VAE) vs Standard Autoencoders optimization mapping loss objective differences structural models?",
            "answer": "Standard maps deterministic points hidden spaces bounds. VAE parameters distributions parameters mean standard deviations sampling latent spaces Kullback-Leibler reconstruction compound structural targets generation properties continuity models distributions."
        },
        {
            "id": 92,
            "level": "Intermediate",
            "category": "Optimization",
            "question": "Learning rate decay scheduling cosine annealing dynamic optimization concepts details tracking paths models?",
            "answer": "Cosine Annealing scales steps cycles drop operations using cosine pattern mapping minimum learning boundaries restarts patterns avoiding traps optimization surfaces convergence performance enhancements variables loops."
        },
        {
            "id": 93,
            "level": "Intermediate",
            "category": "NLP",
            "question": "SentencePiece vs Byte Pair Encoding (BPE) text tokenization algorithmic variance details features properties architectures configurations?",
            "answer": "BPE starts character collections iteratively merges high frequency sequence pairs patterns vocabulary targets. SentencePiece targets text raw byte spaces whitespace treated characters subword segmentations pre tokenization dependency bypass configurations implementations."
        },
        {
            "id": 94,
            "level": "Intermediate",
            "category": "Computer Vision",
            "question": "ResNet (Residual Networks) architecture identity shortcuts skip connections gradient flow advantages designs?",
            "answer": "Skip connections link inputs directly outputs operational layers bypass block operations vector summation mapping logic tracking channels vanishing gradient mitigation extreme deep layers stable optimization convergence attributes configurations."
        },
        {
            "id": 95,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Semi-supervised learning pseudo labeling operations concepts frameworks algorithms implementations parameters?",
            "answer": "Train initially small labeled group infer targets predictions unlabeled clusters highly confident results integrated training iterations dynamically model expansion data tracking techniques."
        },
        {
            "id": 96,
            "level": "Intermediate",
            "category": "Math for AI",
            "question": "Jacobian and Hessian Matrices deep learning neural optimization function mappings significance calculations parameters?",
            "answer": "Jacobian multi dimensional first order vector derivative structures gradient updates pathways track components. Hessian represents second order partial derivatives gradient curvature maps acceleration optimizations strategies patterns structures variables optimization."
        },
        {
            "id": 97,
            "level": "Intermediate",
            "category": "Computer Vision",
            "question": "Semantic Segmentation vs Instance Segmentation architectural distinctions output definitions parameters systems?",
            "answer": "Semantic segmentation classifies pixels globally single labels category matches (All cars same color mask). Instance segmentation identifies separates unique boundaries object entities unique individual instances trackers configurations."
        },
        {
            "id": 98,
            "level": "Intermediate",
            "category": "Deep Learning",
            "question": "Early Stopping validation metrics based training execution loops management controls descriptions designs?",
            "answer": "Monitors validation subset performance steps when loss stops improving past set patience parameters thresholds loop abort mechanisms save optimal weight iterations preventing overfit states algorithms."
        },
        {
            "id": 99,
            "level": "Intermediate",
            "category": "NLP",
            "question": "Sequence to Sequence (Seq2Seq) architectures teacher forcing mechanism training optimizations profiles descriptions designs?",
            "answer": "Teacher forcing passes actual target label reference directly inputs sequence decoder steps instead generation phase prediction loops tokens speed convergence scaling bounds tracking patterns systems implementations."
        },
        {
            "id": 100,
            "level": "Intermediate",
            "category": "Machine Learning Advanced",
            "question": "Isolation Forest algorithm anomaly detection spatial partitioning mechanics implementations tracking configurations details?",
            "answer": "Isolation forest structures recursive random tree partitioning maps. Anomalies require fewer isolation paths splits target isolation leaf nodes isolated fast paths outliers identification structural indicators values algorithms."
        },
        {
            "id": 101,
            "level": "Advanced",
            "category": "System Design",
            "question": "Model parallelism pipeline scheduling 3D parallelism strategies high level cluster orchestrations orchestration patterns frameworks implementations?",
            "answer": "Combines Data parallelism (instances), Tensor slicing parallelism (intra-layer divisions across device nodes), Pipeline stages parallelism (sequential layer chunk distribution). Inter-node networking communication frameworks Megatron-LM DeepSpeed style ring-allreduce execution models maximizing GPU resource metrics boundaries scaling setups configurations."
        },
        {
            "id": 102,
            "level": "Advanced",
            "category": "Architectures",
            "question": "RoPE (Rotary Position Embedding) absolute positional layouts relative attention maps advantages transformers scaling extensions algorithms?",
            "answer": "RoPE injects positional vectors multiplying rotation matrices query keys directly preserving relative sequence properties distance weights decays naturally scaling context window size lengths dynamic interpolation frameworks implementations."
        }
    ]

    const badgeColor = (level) => {
        switch (level) {
            case "Beginner":
                return "bg-green-100 text-green-700";
            case "Intermediate":
                return "bg-yellow-100 text-yellow-700";
            case "Advanced":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };


    return (
        <div>
            <FrontendInterviewHeadder
                title="AI"
                questions={questions} />

            {/* Questions */}
            <InterviewQuestion
                questions={questions}
                badgeColor={badgeColor}
                title="AI"
            />
        </div>
    );
};

export default AiInterviewPage;