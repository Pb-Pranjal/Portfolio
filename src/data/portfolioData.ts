import { Project, SkillGroup, Certification, ExperienceItem, AdditionalRepo } from '../types/portfolio';

export const personalInfo = {
  name: "Pranjal",
  title: "AI/ML Engineering Student & Practical Systems Builder",
  headline: "Building practical AI systems that connect models, tools, and interfaces.",
  shortBio: "Undergraduate AI & ML engineer at Chitkara University (CGPA 9.66/10) focused on bridging Generative AI, agentic tool-calling, and computer vision with robust backend architecture.",
  positioning: "An AI/ML engineering student building practical AI applications and intelligent systems.",
  degree: "B.E. Computer Science Engineering (AI & ML)",
  university: "Chitkara University",
  graduation: "2024 – 2028",
  cgpa: "9.66 / 10.00",
  github: "https://github.com/Pb-Pranjal",
  linkedin: "https://linkedin.com/in/pranjal-pbpranjal",
  leetcode: "https://leetcode.com/u/pb_pranjal",
  email: "pbpranjal2@gmail.com",
  phone: "+91 94783-14981",
  resumePath: "/pranjal-resume.pdf",
  status: "Open to AI/ML & Software Engineering Internships",
  location: "Punjab, India",
};

export const featuredProjects: Project[] = [
  {
    id: "maya-voice-agent",
    title: "Maya — AI Voice Customer Support Agent",
    subtitle: "Real-time speech-to-speech agent with agentic tool calling and refund lifecycle tracking",
    category: "Generative AI & Agents",
    featured: true,
    role: "Team Lead & Backend/AI Architect",
    teamSize: 4,
    summary: "Full-duplex conversational voice agent automating e-commerce customer support with Azure AI Foundry Voice Live, tool-calling for order inspection, duplicate refund prevention, and ticket escalation.",
    githubUrl: "https://github.com/Pb-Pranjal/voice_customer_agent",
    tags: ["Azure AI Foundry", "Voice Live", "FastAPI", "WebSockets", "Tool Calling", "React", "Docker"],
    keyMetrics: [
      { label: "Voice Latency", value: "< 900ms roundtrip" },
      { label: "Tool Call Actions", value: "4 discrete tools" },
      { label: "Test Coverage", value: "5/5 unit tests passed" },
      { label: "Hosting Architecture", value: "Container Apps ready" }
    ],
    whatProblemItSolves: "Customer support desks face overwhelming ticket queues for routine tasks like checking delivery status, tracking refund windows, or reporting damaged goods. Traditional IVR and scripted chatbots frustrate users because they lack context and cannot take action.",
    whatIBuilt: [
      "Engineered the full-duplex WebSocket bridge between the browser PCM audio stream, FastAPI, and Azure AI Foundry Voice Live.",
      "Designed and implemented Python tool calling functions for order status lookup, duplicate-safe refund initiation, and working-day refund ETA computation.",
      "Built automatic overdue refund detection logic and complaint ticket creation for customer escalation.",
      "Developed the React/Vite support dashboard with live microphone capture, real-time transcription log, and audio playback."
    ],
    myRoleContribution: "Served as Team Lead for the 4-engineer project. Architected the backend WebSocket router, Azure Voice Live integration, tool calling schema definitions, order data store, and unit test suite.",
    actualTechStack: [
      { category: "Voice & AI Engine", items: ["Azure AI Foundry Voice Live", "LLM Tool Calling", "Audio PCM 24kHz"] },
      { category: "Backend & Systems", items: ["Python 3.11+", "FastAPI", "Uvicorn", "aiohttp", "WebSockets"] },
      { category: "Frontend", items: ["React 18", "Vite", "Web Audio API", "Tailwind CSS"] },
      { category: "Deployment & Quality", items: ["Docker", "Azure Container Apps", "unittest", "Oxlint"] }
    ],
    technicalDecisions: [
      {
        title: "Bidirectional WebSockets over REST Polling",
        rationale: "Real-time speech requires continuous bi-directional PCM audio streaming. FastAPI WebSocket bridge proxies client audio to Azure Voice Live with sub-second feedback.",
        tradeoff: "Requires persistent connection state management and careful audio buffer cleanup."
      },
      {
        title: "Deterministic Tool Calling for Banking & Refunds",
        rationale: "Rather than letting the LLM invent refund confirmations, the model must invoke structured tools (`request_refund`, `track_refund`) with strict parameter validation.",
        tradeoff: "The agent prompt must be meticulously engineered to invoke tools rather than guessing data."
      },
      {
        title: "Backend-Only Azure Credential Isolation",
        rationale: "Client browsers never touch Azure API keys. The browser talks only to the FastAPI gateway, which orchestrates the Azure session.",
        tradeoff: "All voice data traverses through the backend service."
      }
    ],
    architectureFlow: [
      { step: 1, title: "Client Audio Capture", desc: "Browser Web Audio API captures microphone input as 24kHz PCM chunks.", type: "client" },
      { step: 2, title: "FastAPI WebSocket Gateway", desc: "FastAPI receives PCM chunks at `/ws/voice` and routes them to Azure Voice Live.", type: "api" },
      { step: 3, title: "Azure Voice Live & LLM", desc: "Azure Voice Live performs streaming STT, reasons on intent, and triggers tool calls.", type: "ai" },
      { step: 4, title: "Tool Execution & Grounding", desc: "FastAPI executes `lookup_order` or `request_refund` against the store and returns JSON.", type: "api" },
      { step: 5, title: "Audio Synthesis & Playback", desc: "Azure returns synthesized voice response stream back through WebSocket to client speakers.", type: "client" }
    ],
    realVsSimulated: {
      real: [
        "Live Azure AI Foundry Voice Live WebSocket connection and audio streaming",
        "Deterministic tool calling schema for order queries and refunds",
        "FastAPI WebSocket proxy and REST health monitoring endpoints",
        "Working-day refund calculations and duplicate request rejection logic",
        "React frontend audio worklet and real-time transcript display"
      ],
      simulated: [
        "Mock banking settlement (refund approvals update local JSON state, not actual bank APIs)",
        "Demo order database (`orders.json`) rather than multi-tenant SQL database"
      ],
      limitations: [
        "Single-instance JSON file storage is not distributed or production durable",
        "No multi-factor user authentication on customer voice sessions",
        "Requires active Azure subscription and valid microphone permissions"
      ]
    },
    codeSnippet: {
      language: "python",
      filename: "support_agent.py (Tool Calling Schema)",
      code: `TOOLS = [
    {
        "type": "function",
        "name": "lookup_order",
        "description": "Look up an order by order_id to check status, items, and delivery.",
        "parameters": {
            "type": "object",
            "properties": {
                "order_id": {"type": "string", "description": "e.g. 'A1001'"}
            },
            "required": ["order_id"]
        }
    },
    {
        "type": "function",
        "name": "request_refund",
        "description": "Initiate refund request for an eligible order.",
        "parameters": {
            "type": "object",
            "properties": {
                "order_id": {"type": "string"},
                "reason": {"type": "string"}
            },
            "required": ["order_id", "reason"]
        }
    }
]`
    }
  },
  {
    id: "health-insurance-assistant",
    title: "Health Insurance AI Assistant",
    subtitle: "Grounded RAG assistant for insurance policy documents with verified source citations",
    category: "Generative AI & Agents",
    featured: true,
    role: "Individual Developer",
    summary: "Intelligent policy Q&A assistant built with Azure AI Foundry and Azure AI Search. Features dual text & voice interfaces, short-lived speech tokens, and document citation grounding to prevent hallucination.",
    githubUrl: "https://github.com/Pb-Pranjal/Health-Insurance-Agent",
    tags: ["Azure AI Foundry", "Azure AI Search", "RAG", "FastAPI", "Azure Speech", "React", "Citations"],
    keyMetrics: [
      { label: "Grounding Strategy", value: "Document citations" },
      { label: "Modality", value: "Dual (Text + Voice)" },
      { label: "Key Security", value: "Ephemeral speech tokens" },
      { label: "Client Routing", value: "Zero-mic home page" }
    ],
    whatProblemItSolves: "Health insurance policies are notoriously dense documents filled with obscure waiting periods, co-payment clauses, and exclusion riders. Policyholders struggle to know if a specific hospital admission or procedure is covered without calling agents.",
    whatIBuilt: [
      "Built a FastAPI backend integrating Azure AI Foundry agents and Azure AI Search for document-grounded question answering.",
      "Engineered ephemeral token generation for Azure Speech Services (`/api/speech-token`), ensuring browser client never has direct access to root Azure secrets.",
      "Created a responsive React workspace with speech-to-text voice questions, audio playback for answers, expandable citation cards, and session history.",
      "Added strict anti-hallucination disclaimers and structured fallback when policy terms are absent from the retrieved chunks."
    ],
    myRoleContribution: "Independently architected and implemented the entire project: backend FastAPI services, Azure Foundry agent integration, Azure Speech token issuance, React frontend, and client-side routing.",
    actualTechStack: [
      { category: "AI & RAG", items: ["Azure AI Foundry Agent", "Azure AI Search", "Vector & Hybrid Search", "Grounded Citations"] },
      { category: "Speech Processing", items: ["Azure Speech SDK", "Browser STT", "Azure TTS"] },
      { category: "Backend", items: ["Python 3.10+", "FastAPI", "DefaultAzureCredential", "Uvicorn"] },
      { category: "Frontend", items: ["React 18", "Vite", "React Router", "Tailwind CSS"] }
    ],
    technicalDecisions: [
      {
        title: "Ephemeral Speech Tokens over Static Client Secrets",
        rationale: "Rather than putting Azure Speech keys into frontend `.env` files, the backend provides short-lived tokens via `/api/speech-token` that expire automatically.",
        tradeoff: "Adds an initial token exchange roundtrip before browser speech capture starts."
      },
      {
        title: "Citation-First Answer UI",
        rationale: "Insurance information must be auditable. The UI presents the answer alongside collapsible reference pills pointing to the exact policy sections.",
        tradeoff: "Requires the backend prompt to enforce structured citation output schema."
      },
      {
        title: "Explicit Disclaimers on Claim Eligibility",
        rationale: "Clearly demarcates that the assistant is an informational reference, not an official claim guarantee or underwriter.",
        tradeoff: "Responsible AI safeguard prioritized over absolute authority."
      }
    ],
    architectureFlow: [
      { step: 1, title: "Policy Intake & Indexing", desc: "Insurance policy documents indexed into Azure AI Search vector & keyword indexes.", type: "db" },
      { step: 2, title: "User Query (Text/Voice)", desc: "User speaks or types query; browser obtains short-lived speech token if voice.", type: "client" },
      { step: 3, title: "FastAPI Backend & Agent", desc: "FastAPI handles session ID and invokes Azure AI Foundry agent.", type: "api" },
      { step: 4, title: "Document Grounding", desc: "Agent retrieves relevant clauses from Azure AI Search index and synthesizes answer.", type: "ai" },
      { step: 5, title: "Response with Citations", desc: "Client displays answer with policy references and speaks audio via Azure TTS.", type: "client" }
    ],
    realVsSimulated: {
      real: [
        "Live Azure AI Foundry Agent integration and document-grounded responses",
        "Ephemeral Azure Speech token generation for secure browser audio",
        "Browser Speech-to-Text and Text-to-Speech playback loop",
        "FastAPI question-answering endpoints with session ID threading"
      ],
      simulated: [
        "In-memory session storage (active sessions reset when server restarts)"
      ],
      limitations: [
        "Answer accuracy relies on the specific policy documents uploaded to the Azure index",
        "Informational assistance only; cannot bind insurance providers to coverage"
      ]
    },
    codeSnippet: {
      language: "python",
      filename: "backend/main.py (Speech Token Endpoint)",
      code: `@app.get("/api/speech-token")
async def get_speech_token():
    url = f"https://{SPEECH_REGION}.api.cognitive.microsoft.com/sts/v1.0/issueToken"
    headers = {
        "Ocp-Apim-Subscription-Key": SPEECH_KEY,
        "Content-Type": "application/x-www-form-urlencoded"
    }
    async with aiohttp.ClientSession() as session:
        async with session.post(url, headers=headers) as resp:
            token = await resp.text()
            return {"token": token, "region": SPEECH_REGION}`
    }
  },
  {
    id: "smart-attendance-system",
    title: "AI-Based Smart Attendance System",
    subtitle: "Bidirectional verification using dynamic QR codes and OpenCV liveness-checked face recognition",
    category: "Computer Vision & ML",
    featured: true,
    role: "Team Lead & ML/Backend Developer",
    teamSize: 3,
    summary: "Hackathon-winning attendance platform solving proxy attendance with rotating time-sensitive QR codes, face recognition, and real-time liveness verification using eye blink and head motion detection.",
    githubUrl: "https://github.com/Pb-Pranjal/Smart-Attendance-System",
    tags: ["Django 5.2", "OpenCV", "Liveness Detection", "Face Recognition", "JWT", "QR Codes", "SQLite WAL"],
    keyMetrics: [
      { label: "Hackathon Recognition", value: "Best Technical Implementation" },
      { label: "Liveness Checks", value: "Blink + Head Pose" },
      { label: "Database Mode", value: "SQLite (WAL mode)" },
      { label: "Session Security", value: "JWT + Access Gating" }
    ],
    whatProblemItSolves: "Classroom attendance systems relying solely on static QR codes or RFID cards suffer from rampant proxy attendance — students forward photos of QR codes or tap friends' cards without being present.",
    whatIBuilt: [
      "Engineered dynamic rotating QR code generation tied to teacher sessions, subject, timestamp, and class section.",
      "Implemented computer vision face recognition using OpenCV with active anti-spoofing liveness detection (measuring eye blink rate and randomized head tilt prompts).",
      "Built role-based authentication modules for students, faculty, and administrators with JWT cookie tokens and access-code registration gating.",
      "Designed a real-time faculty analytics dashboard with 7-day attendance trend charts and bulk student CSV/Excel onboarding via pandas."
    ],
    myRoleContribution: "Led the team through the hackathon from ideation to winning implementation. Developed the OpenCV face pipeline, liveness detection logic, dynamic QR generation, and Django database architecture.",
    actualTechStack: [
      { category: "Computer Vision", items: ["OpenCV", "NumPy", "Pillow", "Liveness Detection", "Eye Blink Ratio"] },
      { category: "Backend Framework", items: ["Python", "Django 5.2", "SQLite (WAL mode)", "PyJWT"] },
      { category: "Security & Auth", items: ["Signed QR Tokens", "Role-Based Access Control", "JWT Cookies"] },
      { category: "Data Processing", items: ["Pandas", "openpyxl", "Chart.js / Analytics"] }
    ],
    technicalDecisions: [
      {
        title: "Two-Factor Verification: Dynamic QR + Biometrics",
        rationale: "Neither QR nor face recognition alone is sufficient. Dynamic QR verifies physical presence in the lecture hall; face recognition verifies identity.",
        tradeoff: "Requires 10-15 seconds per student scan during classroom entry."
      },
      {
        title: "Active Liveness Detection against Printed Photos",
        rationale: "Prevented photo spoofing by tracking facial landmarks over successive camera frames for involuntary eye blinks and prompted head turns.",
        tradeoff: "Sensitive to poor lighting in lecture halls, requiring threshold calibration."
      },
      {
        title: "SQLite in WAL (Write-Ahead Logging) Mode",
        rationale: "Enabled concurrent read access for teacher analytics dashboards while multiple students submit attendance records simultaneously.",
        tradeoff: "Well-suited for local/single-server hackathon setup, but requires PostgreSQL for large campus scale."
      }
    ],
    architectureFlow: [
      { step: 1, title: "Dynamic QR Generation", desc: "Faculty portal generates signed, short-lived QR code bound to class and timestamp.", type: "api" },
      { step: 2, title: "QR Scan & JWT Auth", desc: "Student scans QR code from their logged-in mobile portal.", type: "client" },
      { step: 3, title: "Camera Stream & Liveness", desc: "Client camera feeds frames to OpenCV pipeline checking blink and head tilt.", type: "ai" },
      { step: 4, title: "Face Recognition Match", desc: "Facial feature vector matched against registered student profile.", type: "ai" },
      { step: 5, title: "Bidirectional Record", desc: "Attendance committed in WAL database; instant notification reflected on faculty board.", type: "db" }
    ],
    realVsSimulated: {
      real: [
        "OpenCV face detection and eye-blink liveness verification algorithm",
        "Dynamic time-limited QR code generator using Pillow and qrcode",
        "Django 5.2 backend with SQLite WAL mode and JWT session cookies",
        "Student & faculty role-based portals and faculty 7-day trend analytics",
        "Bulk student upload processor using pandas and openpyxl"
      ],
      simulated: [
        "SMS gateway notifications (notifications rendered in web UI, not actual carrier SMS)"
      ],
      limitations: [
        "Face verification operates with standard webcam resolution under reasonable ambient light",
        "Currently deployed on a local server setup rather than distributed cloud cluster"
      ]
    },
    codeSnippet: {
      language: "python",
      filename: "attendance/liveness.py (Blink & Pose Verification)",
      code: `def check_liveness(frame_sequence):
    \"\"\"Calculates Eye Aspect Ratio (EAR) over consecutive frames
    to verify natural blinking and rule out static photographs.\"\"\"
    blink_count = 0
    for frame in frame_sequence:
        landmarks = extract_facial_landmarks(frame)
        left_ear = eye_aspect_ratio(landmarks.left_eye)
        right_ear = eye_aspect_ratio(landmarks.right_eye)
        ear = (left_ear + right_ear) / 2.0
        if ear < EAR_THRESHOLD:
            blink_count += 1
    return blink_count >= MIN_REQUIRED_BLINKS`
    }
  },
  {
    id: "medicine-ocr-analyzer",
    title: "Medicine OCR & Drug Precaution Analyzer",
    subtitle: "Computer vision and medical API pipeline for prescription text extraction and safety warnings",
    category: "Generative AI & Agents",
    featured: true,
    role: "Individual Developer",
    summary: "Healthcare prototype extracting drug names from prescription photos using Tesseract OCR, standardizing against NIH RxNorm, fetching official warnings via OpenFDA, and generating AI safety summaries with local Llama 3.2.",
    githubUrl: "https://github.com/Pb-Pranjal/drug-classifier",
    tags: ["Flask", "Tesseract OCR", "RxNorm API", "OpenFDA API", "Ollama", "Llama 3.2", "Pillow"],
    keyMetrics: [
      { label: "Data Pipeline", value: "3-tier verification" },
      { label: "OCR Engine", value: "Tesseract + Pillow" },
      { label: "Knowledge Bases", value: "RxNorm + OpenFDA" },
      { label: "Local LLM", value: "Ollama (Llama 3.2)" }
    ],
    whatProblemItSolves: "Patients struggle to decipher handwritten prescriptions or small-print medicine labels. Misunderstanding dosage instructions or missing critical drug-drug interaction warnings poses serious health risks.",
    whatIBuilt: [
      "Built an image processing pipeline using Pillow and Tesseract OCR to extract noisy text from medicine package photos.",
      "Implemented fuzzy entity matching against the National Library of Medicine's RxNorm REST API to standardize trade names to generic active ingredients.",
      "Integrated OpenFDA Drug Label API to pull official boxed warnings, contraindications, and precaution statements.",
      "Connected local Ollama (Llama 3.2) to transform dense clinical precaution text into patient-friendly, bulleted safety summaries."
    ],
    myRoleContribution: "Independently built the entire project from scratch: OCR extraction, multi-API pipeline integration, local Ollama LLM prompt engineering, and Flask web UI.",
    actualTechStack: [
      { category: "OCR & Vision", items: ["Tesseract OCR", "pytesseract", "Pillow (PIL)"] },
      { category: "Medical APIs", items: ["NIH RxNorm REST API", "OpenFDA Drug Label API"] },
      { category: "Generative AI", items: ["Ollama", "Llama 3.2", "Zero-shot clinical summarization"] },
      { category: "Backend & Web", items: ["Python", "Flask", "Werkzeug", "Jinja2"] }
    ],
    technicalDecisions: [
      {
        title: "Standardization via RxNorm Before Fetching FDA Labels",
        rationale: "Brand names vary widely across manufacturers. Querying RxNorm first converts brand names to standardized RxCUIs and active ingredients for accurate OpenFDA lookups.",
        tradeoff: "Adds a sequential REST API call before FDA query."
      },
      {
        title: "Local Ollama LLM over Cloud APIs",
        rationale: "Running Llama 3.2 locally via Ollama protects user health data privacy and enables offline inference without API cost.",
        tradeoff: "Requires local GPU/CPU compute and RAM to host the 3B parameter model."
      },
      {
        title: "Grounded Summarization Only from FDA Output",
        rationale: "The LLM is prompted strictly to summarize the retrieved FDA text rather than generating medical advice from memory, avoiding hallucinated dosages.",
        tradeoff: "If OpenFDA has no record for a rare compound, the system reports missing data rather than guessing."
      }
    ],
    architectureFlow: [
      { step: 1, title: "Image Upload", desc: "User uploads prescription photo or drug box image through Flask web form.", type: "client" },
      { step: 2, title: "OCR Text Extraction", desc: "Pillow pre-processes image; Tesseract OCR extracts raw text tokens.", type: "ai" },
      { step: 3, title: "RxNorm Standardization", desc: "Token candidates matched against NIH RxNorm API to identify official active ingredient.", type: "api" },
      { step: 4, title: "OpenFDA Warnings Query", desc: "Official drug label retrieved from FDA database including boxed warnings.", type: "api" },
      { step: 5, title: "AI Plain-Text Summary", desc: "Ollama (Llama 3.2) generates clear, plain-language patient precaution summary.", type: "ai" }
    ],
    realVsSimulated: {
      real: [
        "Tesseract OCR image extraction with Pillow image processing",
        "Live REST integration with NIH RxNorm API for drug normalization",
        "Live REST integration with OpenFDA Drug Label API for official FDA warnings",
        "Local Ollama (Llama 3.2) integration for plain-language summarization",
        "Flask web server and responsive template interface"
      ],
      simulated: [],
      limitations: [
        "Heavily distorted handwriting on paper prescriptions may reduce Tesseract OCR accuracy",
        "Educational prototype only; must not replace professional medical or pharmacist advice"
      ]
    },
    codeSnippet: {
      language: "python",
      filename: "app.py (RxNorm & OpenFDA Fetcher)",
      code: `def get_drug_details(drug_name):
    # Step 1: Standardize with RxNorm
    rx_url = f"https://rxnav.nlm.nih.gov/REST/drugs.json?name={drug_name}"
    resp = requests.get(rx_url).json()
    rxcui = extract_rxcui(resp)
    
    # Step 2: Fetch official OpenFDA warning labels
    fda_url = f"https://api.fda.gov/drug/label.json?search=openfda.rxcui:{rxcui}&limit=1"
    fda_resp = requests.get(fda_url).json()
    warnings = fda_resp['results'][0].get('warnings', ['None listed'])
    
    # Step 3: Summarize via local Ollama
    return summarize_precautions_ollama(drug_name, warnings)`
    }
  },
  {
    id: "carethread-platform",
    title: "CareThread — Campus Case Management Platform",
    subtitle: "Joined-up student support intake and cross-departmental case orchestration system",
    category: "Full-Stack & Systems",
    featured: true,
    role: "Backend & REST API Architect (Team Project)",
    teamSize: 3,
    summary: "University case management platform allowing students to submit a single problem statement that is routed to relevant departments, eliminating fragmented bureaucratic handoffs across campus.",
    githubUrl: "https://github.com/Pb-Pranjal/CareThread-student-support-case-management",
    tags: ["FastAPI", "React", "SQLite", "SQLAlchemy 2", "Pydantic v2", "REST APIs", "Case Management"],
    keyMetrics: [
      { label: "Architecture", value: "Decoupled REST API" },
      { label: "ORM Layer", value: "SQLAlchemy 2.0" },
      { label: "Data Validation", value: "Pydantic v2 schemas" },
      { label: "Phase State", value: "Phase 1 Complete" }
    ],
    whatProblemItSolves: "Students experiencing multifaceted difficulties (e.g. medical emergency leading to fee delays and missed coursework) are forced to navigate separate academic, financial aid, and counseling offices with repeated paperwork.",
    whatIBuilt: [
      "Architected the FastAPI backend services with SQLAlchemy 2 ORM and Pydantic v2 validation models.",
      "Implemented REST endpoints for unified student case intake (`POST /api/intake`), case enumeration (`GET /api/cases`), and detailed case inspection (`GET /api/cases/{case_id}`).",
      "Designed clean relational database schemas linking students, case submissions, status logs, and departmental notes in SQLite.",
      "Built case dashboard view in React enabling campus coordinators to view open cases, monitor review states, and coordinate responses."
    ],
    myRoleContribution: "Served as backend architect in this team project. Created the database models, API route handlers, Pydantic schemas, and collaborated on frontend API service integration.",
    actualTechStack: [
      { category: "Backend Services", items: ["Python 3.11+", "FastAPI", "Uvicorn", "RESTful Architecture"] },
      { category: "Database & ORM", items: ["SQLite", "SQLAlchemy 2.0", "Pydantic v2"] },
      { category: "Frontend Client", items: ["React 18", "Vite", "Axios / Fetch API", "CSS"] },
      { category: "Engineering Standards", items: ["Modular routers", "Clean separation of concerns", "Environment configs"] }
    ],
    technicalDecisions: [
      {
        title: "Strict Pydantic v2 Validation for Intake Forms",
        rationale: "Campus student data must adhere to strict typing and email formats before persistence to eliminate invalid submissions.",
        tradeoff: "Requires explicit schema definitions and error handling on both client and server."
      },
      {
        title: "Relational Schema for Joined-Up Case Tracking",
        rationale: "Single student issue needs to link cleanly to multiple departmental action items and chronological staff review notes.",
        tradeoff: "Requires structured foreign key relationships and JOIN queries."
      },
      {
        title: "Authentic Phase 1 Delivery (No Fake AI Claims)",
        rationale: "Honest engineering transparency: Phase 1 focused on reliable core intake and CRUD management. AI categorization and routing are planned for Phase 2.",
        tradeoff: "Relies on manual coordinator triage in current prototype."
      }
    ],
    architectureFlow: [
      { step: 1, title: "Student Issue Intake", desc: "Student submits combined statement through React intake form.", type: "client" },
      { step: 2, title: "Pydantic Validation", desc: "FastAPI validates student contact and message structure.", type: "api" },
      { step: 3, title: "Database Persistence", desc: "SQLAlchemy 2 commits case record with initial 'NEW' state in SQLite.", type: "db" },
      { step: 4, title: "Coordinator Review", desc: "Campus case coordinator views centralized dashboard and assigns departments.", type: "client" },
      { step: 5, title: "Status Tracking", desc: "Real-time query endpoints provide status updates and staff action notes.", type: "api" }
    ],
    realVsSimulated: {
      real: [
        "FastAPI REST endpoints for case creation, listing, and inspection",
        "SQLAlchemy 2 ORM relational database models and SQLite storage",
        "Pydantic v2 schemas for intake validation and error handling",
        "React/Vite student submission UI and case list view"
      ],
      simulated: [],
      limitations: [
        "Phase 1 prototype currently lacks user authentication and role-based permissions",
        "AI intake categorization and automated department routing are roadmap items (Phase 2)",
        "SQLite database configured for local development rather than multi-server cluster"
      ]
    },
    codeSnippet: {
      language: "python",
      filename: "backend/app/schemas.py (Pydantic Intake Validation)",
      code: `class StudentCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    program: str = Field(..., max_length=100)

class CaseIntakeRequest(BaseModel):
    student: StudentCreate
    message: str = Field(..., min_length=10, max_length=2000)

class CaseResponse(BaseModel):
    case_id: int
    status: str
    message: str
    created_at: datetime`
    }
  },
  {
    id: "rice-yield-prediction",
    title: "Rice Yield Prediction & Indian Crop Production Analysis",
    subtitle: "End-to-end exploratory data analysis and machine learning pipeline for agricultural forecasting",
    category: "Computer Vision & ML",
    featured: false,
    role: "ML & Data Pipeline Developer",
    summary: "Comprehensive ML analysis on multi-decade Indian crop and rainfall datasets (1997–2005). Implemented data cleaning, yield engineering (`production / area`), outlier analysis, and predictive regression models.",
    githubUrl: "https://github.com/Pb-Pranjal/Rice-Yield-Prediction",
    tags: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib", "Seaborn"],
    keyMetrics: [
      { label: "Historical Dataset", value: "1997 – 2005 data" },
      { label: "Key Crops", value: "Rice, Wheat, Sugarcane" },
      { label: "Metric Calculated", value: "Production / Area" },
      { label: "Pipeline", value: "Cleaned & Outlier Handled" }
    ],
    whatProblemItSolves: "Indian agriculture is highly susceptible to monsoon variance and regional yield disparities. Predicting seasonal crop yields helps optimize state resource distribution and agricultural planning.",
    whatIBuilt: [
      "Engineered an automated data cleaning and merge pipeline connecting annual rainfall data with district-wise crop statistics across India.",
      "Calculated normalized crop yield (`production / area`) and performed statistical imputation on missing rainfall records using dataset means.",
      "Conducted exploratory data analysis (EDA) with boxplots and trend charts to map crop yield stability across years.",
      "Trained and evaluated regression models to forecast yield outputs based on area, rainfall, and historical yield patterns."
    ],
    myRoleContribution: "Authored the end-to-end Jupyter modeling pipeline, data normalization, visualization, and model comparison.",
    actualTechStack: [
      { category: "Data Science", items: ["Python", "Pandas", "NumPy", "Jupyter Notebook"] },
      { category: "Machine Learning", items: ["Scikit-learn", "XGBoost", "Linear Regression", "Random Forest"] },
      { category: "Visualization", items: ["Matplotlib", "Seaborn", "Boxplots", "Yield Trend Plots"] }
    ],
    technicalDecisions: [
      {
        title: "Yield Metric Normalization (`Production / Area`)",
        rationale: "Absolute crop production is skewed by varying district land sizes. Normalizing to yield per hectare provides a fair predictive target.",
        tradeoff: "Required filtering out zero-area anomaly rows in legacy government records."
      },
      {
        title: "Multi-Decade Dataset Temporal Merging",
        rationale: "Merged disparate crop statistics and meteorological rainfall tables on normalized crop year indices.",
        tradeoff: "Required imputing rainfall gaps in certain monitoring zones."
      }
    ],
    architectureFlow: [
      { step: 1, title: "Raw Data Ingestion", desc: "Load raw crop production and meteorological rainfall CSV datasets.", type: "db" },
      { step: 2, title: "Data Normalization & Cleaning", desc: "Filter years 1997-2005, clean nulls, compute yield = production/area.", type: "api" },
      { step: 3, title: "Exploratory Analysis (EDA)", desc: "Generate distributions, boxplots, and cross-correlation heatmaps.", type: "ai" },
      { step: 4, title: "Model Training & Tuning", desc: "Train regression models (Random Forest, XGBoost) on historical features.", type: "ai" },
      { step: 5, title: "Evaluation & Forecasting", desc: "Evaluate MAE, RMSE, and produce crop yield forecasts for rice & wheat.", type: "client" }
    ],
    realVsSimulated: {
      real: [
        "Complete data engineering workflow in `SULproject_(1).ipynb`",
        "Cleaned datasets: `rice_data.csv`, `wheat_data.csv`, `sugarcane_data.csv`",
        "Exploratory yield analysis and regression model training"
      ],
      simulated: [],
      limitations: [
        "Historical dataset covers 1997–2005; modern climate variance patterns require updated real-time weather feeds"
      ]
    }
  }
];

export const skillGroups: SkillGroup[] = [
  {
    id: "genai-agents",
    title: "Generative AI & LLM Systems",
    icon: "Bot",
    description: "Architecting agent workflows, real-time voice bridges, RAG retrieval pipelines, and function calling systems.",
    skills: [
      { name: "LLMs & Agent Workflows", level: "Core", featured: true },
      { name: "Tool / Function Calling", level: "Core", featured: true },
      { name: "RAG (Retrieval-Augmented Gen)", level: "Core", featured: true },
      { name: "Prompt Engineering", level: "Core", featured: true },
      { name: "Azure AI Foundry & Voice Live", level: "Applied", featured: true },
      { name: "Ollama (Llama 3.2)", level: "Applied", featured: true },
      { name: "Conversational AI Systems", level: "Applied" },
      { name: "Azure AI Search (Vector/Hybrid)", level: "Applied" }
    ]
  },
  {
    id: "ml-cv",
    title: "AI, ML & Computer Vision",
    icon: "Eye",
    description: "Developing computer vision pipelines, anti-spoofing liveness algorithms, and supervised predictive models.",
    skills: [
      { name: "Computer Vision (OpenCV)", level: "Core", featured: true },
      { name: "Face Recognition & Biometrics", level: "Core", featured: true },
      { name: "Liveness Detection (Blink/Head)", level: "Applied", featured: true },
      { name: "Tesseract OCR", level: "Applied", featured: true },
      { name: "Scikit-Learn & XGBoost", level: "Applied", featured: true },
      { name: "PyTorch", level: "Applied" },
      { name: "NumPy & Pandas", level: "Core" }
    ]
  },
  {
    id: "backend-cloud",
    title: "Backend, APIs & Cloud Systems",
    icon: "Server",
    description: "Building production-style REST APIs, full-duplex WebSockets, containerized microservices, and database schemas.",
    skills: [
      { name: "Python (FastAPI, Django, Flask)", level: "Core", featured: true },
      { name: "WebSockets & Async I/O (aiohttp)", level: "Core", featured: true },
      { name: "REST API Design", level: "Core", featured: true },
      { name: "SQLAlchemy 2 & Pydantic v2", level: "Applied", featured: true },
      { name: "Docker Containerization", level: "Applied", featured: true },
      { name: "Azure Container Apps / Static Apps", level: "Applied" },
      { name: "SQLite (WAL mode) & MySQL", level: "Core" },
      { name: "JWT Session Authentication", level: "Applied" }
    ]
  },
  {
    id: "languages-core",
    title: "Languages & Computer Science Core",
    icon: "Code",
    description: "Strong foundation in data structures, algorithms, object-oriented design, systems, and modern programming languages.",
    skills: [
      { name: "Python", level: "Core", featured: true },
      { name: "Java", level: "Core", featured: true },
      { name: "C++", level: "Core" },
      { name: "SQL", level: "Core" },
      { name: "Swift", level: "Applied" },
      { name: "Data Structures & Algorithms", level: "Core", featured: true },
      { name: "Object-Oriented Programming (OOP)", level: "Core" },
      { name: "DBMS, OS & Computer Networks", level: "Core" }
    ]
  },
  {
    id: "frontend-tools",
    title: "Frontend & Engineering Workflow",
    icon: "Layout",
    description: "Constructing responsive, high-performance web dashboards and maintaining rigorous version-controlled workflows.",
    skills: [
      { name: "React 18 & Vite", level: "Core", featured: true },
      { name: "Tailwind CSS & Modern UI", level: "Core", featured: true },
      { name: "Git & GitHub Version Control", level: "Core", featured: true },
      { name: "VS Code & Postman", level: "Core" },
      { name: "Web Audio API (PCM Streaming)", level: "Applied" },
      { name: "Eclipse IDE", level: "Proficient" }
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: "ai-900",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    code: "AI-900",
    status: "Verified",
    badge: "Azure AI",
    topics: ["Generative AI workloads", "Computer vision & NLP", "Azure AI Foundry & Speech", "Responsible AI principles"]
  },
  {
    id: "dp-900",
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    code: "DP-900",
    status: "Verified",
    badge: "Azure Data",
    topics: ["Relational & Non-relational data", "Azure Cosmos DB & SQL", "Data warehousing & analytics", "Storage principles"]
  },
  {
    id: "az-900",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    status: "Verified",
    badge: "Azure Cloud",
    topics: ["Cloud computing concepts", "Azure architecture & services", "Management & governance", "Security & compliance"]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "scrs-leadership",
    role: "Technical Executive",
    organization: "SCRS (Society for Computer Research & Science)",
    period: "May 2025 – Present",
    type: "Role",
    badge: "Leadership & Community",
    description: "Organizing university technical initiatives, mentoring peer students, and collaborating on hands-on software development workshops.",
    highlights: [
      "Coordinated campus technical activities and developer bootcamps on Python and AI fundamentals.",
      "Collaborated on development initiatives and assisted peers in debugging algorithmic and system design challenges.",
      "Promoting responsible engineering practices and collaborative open-source workflows."
    ]
  },
  {
    id: "smart-attendance-hackathon",
    role: "Team Lead & Project Architect",
    organization: "Smart Attendance System Hackathon",
    period: "Hackathon Award",
    type: "Hackathon Award",
    badge: "🏆 Best Technical Implementation Award",
    description: "Led a 3-engineer team to victory with a high-integrity attendance solution combining rotating dynamic QR codes with OpenCV liveness face detection.",
    highlights: [
      "Awarded Best Technical Implementation out of competing university teams.",
      "Pitched and demonstrated live 2-factor authentication: QR scan followed by real-time anti-spoofing blink checks.",
      "Implemented concurrent SQLite WAL architecture with zero database locks during rapid sequential scans."
    ]
  },
  {
    id: "gdg-hackathon",
    role: "Participant & Prototyper",
    organization: "Google Developer Groups (GDG) — GenAI Hackathon",
    period: "Hackathon Participant",
    type: "Hackathon Participant",
    badge: "GenAI Innovation",
    description: "Developed and prototyped Generative AI solutions applying multimodal LLM concepts and API integrations under tight time constraints.",
    highlights: [
      "Built prototype agent workflows leveraging tool-calling and prompt grounding.",
      "Collaborated with developers across diverse stacks and integrated modern AI SDKs."
    ]
  }
];

export const educationInfo = {
  degree: "B.E. — Computer Science Engineering (AI & ML)",
  institution: "Chitkara University",
  period: "2024 – 2028",
  cgpa: "9.66 / 10.00",
  highlights: [
    "Ranked in top academic percentile with 9.66/10.00 cumulative grade point average.",
    "Specialized coursework in AI & ML, Data Structures & Algorithms, Object-Oriented Programming, and Computer Networks.",
    "Active contributor to student technical societies (SCRS) and collegiate hackathons."
  ]
};

export const additionalRepositories: AdditionalRepo[] = [
  {
    name: "agri-smart-system",
    language: "HTML / JavaScript",
    description: "Smart agricultural monitoring web interface for visualizing soil condition, temperature, and crop parameters.",
    githubUrl: "https://github.com/Pb-Pranjal/agri-smart-system"
  },
  {
    name: "DEEPFAKE",
    language: "Python / CSS",
    description: "Exploration repository on deepfake detection techniques, video frame decomposition, and artifact analysis.",
    githubUrl: "https://github.com/Pb-Pranjal/DEEPFAKE"
  },
  {
    name: "DNN",
    language: "Python",
    description: "Deep Neural Network architectures, backpropagation implementations, and training routines from fundamentals.",
    githubUrl: "https://github.com/Pb-Pranjal/DNN"
  },
  {
    name: "Donation-Website",
    language: "JavaScript / Web",
    description: "Full-stack donation and philanthropic drive management interface with responsive contribution tracking.",
    githubUrl: "https://github.com/Pb-Pranjal/Donation-Website"
  },
  {
    name: "G-29-E-commerce-Platform",
    language: "HTML / Full-Stack",
    description: "Collaborative academic e-commerce storefront with product catalog, cart management, and checkout flows.",
    githubUrl: "https://github.com/Pb-Pranjal/G-29-E-commerce-Platform"
  }
];
