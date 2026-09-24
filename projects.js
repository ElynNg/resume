/* Project data — one entry per project, text in each supported language.
   `stack` is shown as tags and used by the tech filter. */
const PROJECTS = [
    {
        code: 'GLG',
        stack: ['Spring Boot', 'Java', 'Oracle', 'Gradle', 'Flyway', 'Next.js', 'React', 'TypeScript', 'Docker'],
        link: 'https://goalog.vercel.app',
        en: {
            name: 'Goalog — Personal Goal Management Web Service',
            org: 'Personal project',
            period: '2026.06 – 2026.07',
            role: 'Full-stack (planning, design, development, deployment)',
            intro: [
                'A web service for managing any kind of goal — knitting, dieting, coding and more — by type: count, time, streak, measurement, or milestone.',
                'Provides milestones, daily progress logs, a kanban issue board, and rounds for recurring goals.'
            ],
            highlights: [
                'Designed a REST API on Spring Boot and Oracle Autonomous Database, versioned the schema with Flyway, and separated development and production databases.',
                'Implemented authentication with JWT in httpOnly cookies and refresh token rotation, storing tokens as SHA-256 hashes.',
                'Containerized the backend with a multi-stage Dockerfile, and deployed the frontend to Vercel and the backend to Railway.'
            ]
        },
        ko: {
            name: 'Goalog – 개인 목표 관리 웹 서비스',
            org: '개인 프로젝트',
            period: '2026.06 ~ 2026.07',
            role: '풀스택 개발 (기획, 설계, 개발, 배포)',
            intro: [
                '뜨개질, 다이어트, 코딩 등 다양한 목표를 유형별(횟수/시간/연속일/측정값/마일스톤)로 관리하는 웹 서비스입니다.',
                '마일스톤, 일일 진행 기록, 칸반 이슈 보드, 반복 목표를 위한 라운드 기능을 제공합니다.'
            ],
            highlights: [
                'Spring Boot와 Oracle Autonomous DB 기반 REST API를 설계하고, Flyway로 스키마를 버전 관리하며 개발/운영 DB를 분리하였습니다.',
                'JWT(httpOnly 쿠키)와 Refresh Token 로테이션(SHA-256 해시 저장) 인증을 구현하였습니다.',
                'Multi-stage Dockerfile로 백엔드를 컨테이너화하고, Vercel(프론트)과 Railway(백엔드)에 배포하였습니다.'
            ]
        },
        vi: {
            name: 'Goalog — Dịch vụ web quản lý mục tiêu cá nhân',
            org: 'Dự án cá nhân',
            period: '2026.06 – 2026.07',
            role: 'Full-stack (lên ý tưởng, thiết kế, phát triển, triển khai)',
            intro: [
                'Dịch vụ web giúp quản lý nhiều loại mục tiêu như đan len, ăn kiêng, lập trình… theo từng loại: số lần, thời gian, chuỗi ngày liên tiếp, giá trị đo lường và cột mốc.',
                'Cung cấp cột mốc, nhật ký tiến độ hằng ngày, bảng Kanban quản lý issue và tính năng vòng (round) cho các mục tiêu lặp lại.'
            ],
            highlights: [
                'Thiết kế REST API trên nền Spring Boot và Oracle Autonomous DB, quản lý phiên bản schema bằng Flyway và tách biệt cơ sở dữ liệu môi trường phát triển và vận hành.',
                'Triển khai xác thực bằng JWT (cookie httpOnly) và cơ chế xoay vòng Refresh Token (lưu dưới dạng hash SHA-256).',
                'Đóng gói backend bằng Multi-stage Dockerfile, triển khai frontend lên Vercel và backend lên Railway.'
            ]
        }
    },
    {
        code: 'SCP',
        stack: ['Spring Boot', 'Java', 'Oracle', 'Gradle', 'Bamboo'],
        en: {
            name: 'SCP — System Upgrade Project',
            org: 'Samsung Welstory',
            period: '2026.04 – 2026.07 (≈3 months)',
            role: 'Backend Development & System Improvement',
            intro: [
                'A project to modernize outdated Spring Boot and Java versions, improving system stability and maintainability.',
                'Focused on verifying Oracle database compatibility issues and the scope of impact from the upgrade in advance.'
            ],
            highlights: [
                'Upgraded Spring Boot and Java versions, and verified compatibility with the Oracle database to analyze the impact.',
                'Updated Gradle libraries and restructured dependencies to improve build stability.',
                'Analyzed and refactored existing source code to improve code quality.',
                'Improved the Bamboo CI/CD process to stabilize the build environment.',
                'Performed post-upgrade functional verification to support stable operation.'
            ]
        },
        ko: {
            name: 'SCP – 시스템 업그레이드 프로젝트',
            org: '삼성웰스토리',
            period: '2026.04 ~ 2026.07 (약 3개월)',
            role: '백엔드 개발 및 시스템 개선',
            intro: [
                '노후화된 Spring Boot 및 Java 버전을 최신화하여 시스템 안정성과 유지보수성을 개선하기 위해 진행된 프로젝트입니다.',
                '버전 업그레이드에 따른 Oracle 데이터베이스 호환성 문제와 영향 범위를 사전에 검증하는 데 중점을 두었습니다.'
            ],
            highlights: [
                'Spring Boot 및 Java 버전을 업그레이드하고, Oracle 데이터베이스와의 호환성을 검증하여 영향도를 분석하였습니다.',
                'Gradle 라이브러리를 최신화하고 의존성 구조를 개선하여 빌드 안정성을 높였습니다.',
                '기존 소스 코드를 분석하고 리팩토링하여 코드 품질을 개선하였습니다.',
                'Bamboo CI/CD 프로세스를 개선하여 빌드 환경을 안정화하였습니다.',
                '업그레이드 이후 기능 검증을 수행하여 운영 안정화를 지원하였습니다.'
            ]
        },
        vi: {
            name: 'SCP — Dự án nâng cấp hệ thống',
            org: 'Samsung Welstory',
            period: '2026.04 – 2026.07 (khoảng 3 tháng)',
            role: 'Phát triển backend & cải tiến hệ thống',
            intro: [
                'Dự án cập nhật các phiên bản Spring Boot và Java đã lỗi thời nhằm nâng cao tính ổn định và khả năng bảo trì của hệ thống.',
                'Tập trung kiểm chứng trước các vấn đề tương thích với cơ sở dữ liệu Oracle và phạm vi ảnh hưởng do việc nâng cấp phiên bản.'
            ],
            highlights: [
                'Nâng cấp phiên bản Spring Boot và Java, kiểm chứng khả năng tương thích với cơ sở dữ liệu Oracle và phân tích mức độ ảnh hưởng.',
                'Cập nhật các thư viện Gradle và cải thiện cấu trúc phụ thuộc, giúp tăng độ ổn định khi build.',
                'Phân tích và refactor mã nguồn hiện có để nâng cao chất lượng code.',
                'Cải tiến quy trình CI/CD trên Bamboo, giúp ổn định môi trường build.',
                'Thực hiện kiểm thử chức năng sau nâng cấp, hỗ trợ ổn định vận hành.'
            ]
        }
    },
    {
        code: 'TOUR',
        stack: ['Java', 'Spring Boot', 'JWT', 'React', 'GitHub Actions'],
        en: {
            name: 'Competition Project — Backend Common Framework & Authentication',
            org: 'Competition project (team)',
            period: '2026.05 – Present',
            role: 'Backend Common Framework & Authentication',
            intro: [
                'A team project for a tourism-data competition, where I was responsible for designing the service-wide common framework and implementing the authentication system.',
                'Laid the groundwork for development, from the shared backend foundation to common frontend components.'
            ],
            highlights: [
                'Set up the GitHub repository and branch protection rules to establish a foundation for team collaboration.',
                'Scaffolded the backend and frontend, and built the common foundation: BaseEntity, a shared response format (ApiResponse), and exception handling.',
                'Built the authentication system with JWT-based sign-up/login and refresh token logic.',
                'Developed common frontend components such as Layout, Header, and Loading.',
                'Implemented favorites and reviews on the My Page screen.',
                'Designed a common adapter for integrating six external public APIs, plus the foundation for multilingual (i18n) support.',
                'Contributed to quality during QA through AI-assisted scenario testing, bug fixes, and copy review.'
            ]
        },
        ko: {
            name: '공모전 프로젝트 – 백엔드 공통 프레임워크 및 인증 시스템 개발',
            org: '공모전 프로젝트 (팀 프로젝트)',
            period: '2026.05 ~ 진행중',
            role: '백엔드 공통 프레임워크 개발 및 인증 시스템 구현',
            intro: [
                '관광 데이터 활용 공모전 출품을 목표로 진행된 팀 프로젝트로, 서비스 전반의 공통 프레임워크 설계와 인증 시스템 구현을 담당하였습니다.',
                '백엔드 공통 기반부터 프론트엔드 공통 컴포넌트까지 서비스 개발의 토대를 다지는 역할을 수행하였습니다.'
            ],
            highlights: [
                'GitHub 저장소 및 브랜치 보호 정책을 설정하여 팀 협업 기반을 마련하였습니다.',
                'BE/FE 스캐폴딩을 진행하고, BaseEntity·공통 응답 형식(ApiResponse)·예외 처리 등 공통 기반을 구축하였습니다.',
                'JWT 기반 회원가입/로그인 및 Refresh Token 로직을 구현하여 인증 시스템을 구축하였습니다.',
                'Layout, Header, Loading 등 프론트엔드 공통 컴포넌트를 개발하였습니다.',
                '마이페이지 즐겨찾기 및 리뷰 기능을 구현하였습니다.',
                '외부 공공 API 6종 연동을 위한 공통 어댑터와 다국어(i18n) 처리 기반을 설계하였습니다.',
                'QA 단계에서 AI를 활용한 시나리오 테스트, 버그 수정, 카피 검수 등을 수행하며 품질 개선에 기여하였습니다.'
            ]
        },
        vi: {
            name: 'Dự án cuộc thi — Framework dùng chung backend & hệ thống xác thực',
            org: 'Dự án cuộc thi (làm việc nhóm)',
            period: '2026.05 – Hiện tại',
            role: 'Phát triển framework dùng chung backend & hệ thống xác thực',
            intro: [
                'Dự án nhóm tham gia cuộc thi ứng dụng dữ liệu du lịch; tôi phụ trách thiết kế framework dùng chung cho toàn bộ dịch vụ và xây dựng hệ thống xác thực.',
                'Đặt nền móng cho quá trình phát triển, từ nền tảng dùng chung ở backend đến các component dùng chung ở frontend.'
            ],
            highlights: [
                'Thiết lập repository GitHub và chính sách bảo vệ nhánh, tạo nền tảng cho việc cộng tác trong nhóm.',
                'Khởi tạo khung dự án (scaffolding) BE/FE và xây dựng nền tảng dùng chung như BaseEntity, định dạng phản hồi chung (ApiResponse) và xử lý ngoại lệ.',
                'Xây dựng hệ thống xác thực với đăng ký/đăng nhập dựa trên JWT và logic Refresh Token.',
                'Phát triển các component dùng chung ở frontend như Layout, Header, Loading.',
                'Hiện thực chức năng yêu thích và đánh giá (review) trong trang cá nhân.',
                'Thiết kế adapter dùng chung để kết nối 6 API công khai bên ngoài và nền tảng hỗ trợ đa ngôn ngữ (i18n).',
                'Góp phần nâng cao chất lượng ở giai đoạn QA thông qua kiểm thử kịch bản với sự hỗ trợ của AI, sửa lỗi và rà soát nội dung hiển thị.'
            ]
        }
    },
    {
        code: 'WHN',
        stack: ['React', 'Java', 'Spring Boot', 'Bitbucket Pipelines'],
        en: {
            name: 'WhoNeed — Meal Management Solution',
            org: 'WhoNeed',
            period: '2025.05 – 2025.12 (≈7 months)',
            role: 'Frontend / Backend Development & CI/CD',
            intro: [
                'A service supporting personalized meal management; I took part in the full process, from frontend and backend to deployment automation.',
                'Also contributed to building the CI/CD environment to improve operational stability.'
            ],
            highlights: [
                'Developed React-based user screens, and designed and implemented REST APIs with Java (Spring Boot).',
                'Integrated the database to implement core service features.',
                'Built a CI/CD environment on Bitbucket Pipelines to improve the deployment process.',
                'Set up automated deployment for both frontend and backend, improving operational efficiency.'
            ]
        },
        ko: {
            name: 'WhoNeed 식단관리 솔루션',
            org: '후니드',
            period: '2025.05 ~ 2025.12 (약 7개월)',
            role: '프론트엔드 / 백엔드 개발 및 CI/CD 구축',
            intro: [
                '사용자 맞춤형 식단 관리를 지원하기 위해 개발된 서비스로, 프론트엔드부터 백엔드, 배포 자동화까지 전 과정에 참여하였습니다.',
                '서비스 운영 안정성을 높이기 위해 CI/CD 환경 구축에도 함께 기여하였습니다.'
            ],
            highlights: [
                'React 기반 사용자 화면을 개발하고, Java(Spring Boot) 기반 REST API를 설계·구현하였습니다.',
                '데이터베이스를 연동하여 핵심 서비스 기능을 구현하였습니다.',
                'Bitbucket Pipeline 기반 CI/CD 환경을 구축하여 배포 프로세스를 개선하였습니다.',
                '프론트엔드와 백엔드의 자동 배포 환경을 구축하여 운영 효율성을 높였습니다.'
            ]
        },
        vi: {
            name: 'WhoNeed — Giải pháp quản lý thực đơn',
            org: 'WhoNeed',
            period: '2025.05 – 2025.12 (khoảng 7 tháng)',
            role: 'Phát triển frontend / backend & xây dựng CI/CD',
            intro: [
                'Dịch vụ hỗ trợ quản lý thực đơn cá nhân hóa cho người dùng; tham gia toàn bộ quy trình từ frontend, backend đến tự động hóa triển khai.',
                'Đồng thời góp phần xây dựng môi trường CI/CD nhằm nâng cao tính ổn định khi vận hành dịch vụ.'
            ],
            highlights: [
                'Phát triển giao diện người dùng bằng React, thiết kế và triển khai REST API bằng Java (Spring Boot).',
                'Kết nối cơ sở dữ liệu để hiện thực các chức năng cốt lõi của dịch vụ.',
                'Xây dựng môi trường CI/CD với Bitbucket Pipeline, cải thiện quy trình triển khai.',
                'Thiết lập tự động triển khai cho cả frontend và backend, nâng cao hiệu quả vận hành.'
            ]
        }
    },
    {
        code: 'ADMS',
        stack: ['JavaScript', 'C#', 'MSSQL', 'HTML', 'CSS', 'Chart.js', 'jqPlot'],
        en: {
            name: 'ADMS — Analysis Request Management System',
            org: 'SK Materials',
            period: '2024.03 – 2024.07',
            role: 'Lead Developer',
            intro: [
                'A system built to streamline analysis request management, replacing an Excel-based workflow.',
                'Helped administrators track and review request status efficiently, improving visibility and throughput across request handling.'
            ],
            highlights: [
                'Visualized real-time production data with JavaScript libraries such as Chart.js, enabling production trend monitoring and anomaly detection.',
                'Implemented real-time trend analysis to make decision-making more efficient.',
                'Improved the web UI and database integration, increasing data processing stability and performance for users.',
                'Actively gathered client feedback and incorporated it into system improvements.'
            ]
        },
        ko: {
            name: 'ADMS – Analysis Request Management System',
            org: 'SK멀티리얼즈',
            period: '2024.03 ~ 2024.07',
            role: '메인 개발자 (Software Developer)',
            intro: [
                '기존 엑셀 기반 업무 방식에서 벗어나 분석 요청 관리 업무를 효율화하기 위해 개발된 시스템입니다.',
                '관리자가 분석 요청 현황을 효율적으로 추적·조회할 수 있도록 지원하여, 요청 처리 전반의 가시성과 처리 효율을 향상시켰습니다.'
            ],
            highlights: [
                'Chart.js 등 JavaScript 라이브러리를 활용하여 실시간 생산 데이터를 시각화하고, 생산 트렌드 모니터링 및 이상 탐지가 가능하도록 구현하였습니다.',
                '실시간 트렌드 분석 기능을 구현하여 의사결정 효율성을 개선하였습니다.',
                '웹 UI 및 데이터베이스 연동 작업을 개선하여 데이터 처리 안정성과 사용자 성능을 향상시켰습니다.',
                '고객사 피드백을 적극 수렴하여 시스템 개선에 반영하였습니다.'
            ]
        },
        vi: {
            name: 'ADMS — Hệ thống quản lý yêu cầu phân tích',
            org: 'SK Materials',
            period: '2024.03 – 2024.07',
            role: 'Lập trình viên chính',
            intro: [
                'Hệ thống được phát triển để thay thế cách làm việc dựa trên Excel, giúp tối ưu nghiệp vụ quản lý yêu cầu phân tích.',
                'Hỗ trợ quản trị viên theo dõi và tra cứu tình trạng yêu cầu hiệu quả, nâng cao khả năng nắm bắt và hiệu suất xử lý yêu cầu.'
            ],
            highlights: [
                'Sử dụng các thư viện JavaScript như Chart.js để trực quan hóa dữ liệu sản xuất theo thời gian thực, hỗ trợ giám sát xu hướng sản xuất và phát hiện bất thường.',
                'Xây dựng chức năng phân tích xu hướng theo thời gian thực, cải thiện hiệu quả ra quyết định.',
                'Cải tiến giao diện web và việc kết nối cơ sở dữ liệu, nâng cao độ ổn định xử lý dữ liệu và hiệu năng cho người dùng.',
                'Tích cực tiếp nhận phản hồi từ khách hàng và áp dụng vào việc cải tiến hệ thống.'
            ]
        }
    },
    {
        code: 'SCM',
        stack: ['JavaScript', 'C#', 'MSSQL', 'HTML', 'CSS', 'Chart.js', 'jqPlot'],
        en: {
            name: 'SCM — Logistics Management System',
            org: 'SK Materials',
            period: '2024.07 – 2024.12',
            role: 'Full-stack Developer',
            intro: [
                'Built at the request of the management team to track sales trends and year-over-year performance.',
                'Helped managers monitor inputs and outputs and analyze inventory levels and raw material requirements, supporting purchasing and marketing decisions.'
            ],
            highlights: [
                'Owned the entire process, from database design to web page development and Windows service implementation.',
                'Implemented processing logic for numerous Excel files and tables to fit the data-centric workflow.',
                'Built a service that loads Excel documents continuously updated on a shared system into the database, gaining hands-on experience in data processing and management.'
            ]
        },
        ko: {
            name: 'SCM – 물류 관리 시스템',
            org: 'SK멀티리얼즈',
            period: '2024.07 ~ 2024.12',
            role: '풀스택 개발',
            intro: [
                '경영팀의 요청으로 개발된 시스템으로, 판매 데이터의 트렌드와 연도별 실적을 추적할 수 있도록 설계되었습니다.',
                '관리자가 투입·산출을 모니터링하고 재고 수준과 원자재 소요량을 분석하여, 발주 및 마케팅 전략 관련 의사결정을 지원하는 데 목적을 두었습니다.'
            ],
            highlights: [
                '데이터베이스 설계부터 웹 페이지 개발, 윈도우 서비스 구현까지 전 과정을 담당하였습니다.',
                '데이터 중심 업무 특성에 맞춰 다수의 엑셀 파일 및 테이블 처리 로직을 구현하였습니다.',
                '공통 시스템에 지속적으로 업데이트되는 엑셀 문서를 데이터베이스화하는 서비스를 구현하여, 데이터 처리와 관리에 대한 실무 경험을 쌓았습니다.'
            ]
        },
        vi: {
            name: 'SCM — Hệ thống quản lý logistics',
            org: 'SK Materials',
            period: '2024.07 – 2024.12',
            role: 'Lập trình viên Full-stack',
            intro: [
                'Hệ thống được phát triển theo yêu cầu của đội ngũ quản lý, cho phép theo dõi xu hướng dữ liệu bán hàng và kết quả kinh doanh theo từng năm.',
                'Giúp quản lý giám sát đầu vào – đầu ra, phân tích mức tồn kho và nhu cầu nguyên vật liệu, hỗ trợ ra quyết định về đặt hàng và chiến lược marketing.'
            ],
            highlights: [
                'Đảm nhận toàn bộ quy trình từ thiết kế cơ sở dữ liệu, phát triển trang web đến xây dựng Windows Service.',
                'Xây dựng logic xử lý nhiều file Excel và bảng dữ liệu, phù hợp với đặc thù nghiệp vụ tập trung vào dữ liệu.',
                'Phát triển dịch vụ đưa các tài liệu Excel được cập nhật liên tục trên hệ thống chung vào cơ sở dữ liệu, tích lũy kinh nghiệm thực tế về xử lý và quản lý dữ liệu.'
            ]
        }
    },
    {
        code: 'MDW',
        stack: ['JavaScript', 'C#', 'MSSQL', 'HTML', 'CSS', 'Chart.js', 'jqPlot'],
        en: {
            name: 'MDW — Manufacturing Portal',
            org: 'SK Specialty',
            period: '2023.11 – 2024.11',
            role: 'Full-stack Developer',
            intro: [
                'Designed to improve managers’ decision-making by monitoring real-time daily data.',
                'Sent alerts and reports by email to registered managers in each department, helping resolve issues quickly and improving operational efficiency.'
            ],
            highlights: [
                'Cut the time spent tracking and sharing data across departments by 60%, significantly boosting productivity.',
                'Designed and implemented solutions for processing large volumes of data efficiently, strengthening my skills with the related libraries.'
            ]
        },
        ko: {
            name: 'MDW – 제조 포털',
            org: 'SK스페셜티',
            period: '2023.11 ~ 2024.11',
            role: '풀스택 개발',
            intro: [
                '일일 실시간 데이터를 모니터링하여 관리자의 의사결정 과정을 향상시키기 위해 설계된 시스템입니다.',
                '각 부서의 등록된 관리자에게 이메일로 경고 및 보고서를 전달하여 문제를 신속히 해결하고 운영 효율성을 높이는 데 기여하였습니다.'
            ],
            highlights: [
                '부서 간 데이터 추적 및 공유에 소요되는 시간을 60% 단축하여 업무 생산성을 크게 향상시켰습니다.',
                '대량의 데이터를 효과적으로 처리하기 위한 솔루션을 설계·구현하며 관련 라이브러리 활용 역량을 강화하였습니다.'
            ]
        },
        vi: {
            name: 'MDW — Cổng thông tin sản xuất',
            org: 'SK Specialty',
            period: '2023.11 – 2024.11',
            role: 'Lập trình viên Full-stack',
            intro: [
                'Hệ thống giám sát dữ liệu thời gian thực hằng ngày nhằm cải thiện quá trình ra quyết định của quản lý.',
                'Gửi cảnh báo và báo cáo qua email đến quản lý đã đăng ký của từng bộ phận, giúp xử lý sự cố nhanh chóng và nâng cao hiệu quả vận hành.'
            ],
            highlights: [
                'Rút ngắn 60% thời gian theo dõi và chia sẻ dữ liệu giữa các bộ phận, nâng cao đáng kể năng suất công việc.',
                'Thiết kế và triển khai giải pháp xử lý hiệu quả khối lượng dữ liệu lớn, nâng cao năng lực sử dụng các thư viện liên quan.'
            ]
        }
    },
    {
        code: 'UMS',
        stack: ['JavaScript', 'C#', 'MSSQL', 'HTML', 'CSS', 'Chart.js', 'jqPlot'],
        en: {
            name: 'UMS — Utility Management System',
            org: 'SK Materials',
            period: '2023.11 – 2024.03',
            role: 'Full-stack Developer',
            intro: [
                'An integrated module for managing and monitoring utilities across the organization, bringing inventory levels, temperature monitoring, and failure tracking together in one easy-to-use module.',
                'Aimed to foster cross-department collaboration and improve operational efficiency.'
            ],
            highlights: [
                'Went beyond simple data display, focusing on anomaly alerts and data visualization.',
                'Designed a user-friendly UI/UX that supports cross-department collaboration and efficient decision-making.'
            ]
        },
        ko: {
            name: 'UMS – 유틸리티 관리 시스템',
            org: 'SK멀티리얼즈',
            period: '2023.11 ~ 2024.03',
            role: '풀스택 개발',
            intro: [
                '조직 내 다양한 유틸리티를 관리·모니터링하기 위한 통합 모듈로, 재고 수준, 온도 모니터링, 장애 추적 관련 데이터를 하나의 사용하기 쉬운 모듈로 통합하여 제공하였습니다.',
                '부서 간 협업을 촉진하고 운영 효율성을 향상시키는 데 목적을 두었습니다.'
            ],
            highlights: [
                '단순 데이터 표시를 넘어 이상 감지 경고 알림 및 데이터 시각화 기능을 중심으로 개발을 진행하였습니다.',
                '사용자 친화적인 UI/UX를 설계하여 부서 간 협업과 효율적인 의사결정을 지원하였습니다.'
            ]
        },
        vi: {
            name: 'UMS — Hệ thống quản lý tiện ích',
            org: 'SK Materials',
            period: '2023.11 – 2024.03',
            role: 'Lập trình viên Full-stack',
            intro: [
                'Module tích hợp để quản lý và giám sát các tiện ích trong tổ chức, gộp dữ liệu về mức tồn kho, giám sát nhiệt độ và theo dõi sự cố vào một module dễ sử dụng.',
                'Hướng đến thúc đẩy sự phối hợp giữa các bộ phận và nâng cao hiệu quả vận hành.'
            ],
            highlights: [
                'Không chỉ hiển thị dữ liệu đơn thuần mà tập trung phát triển chức năng cảnh báo bất thường và trực quan hóa dữ liệu.',
                'Thiết kế UI/UX thân thiện với người dùng, hỗ trợ phối hợp giữa các bộ phận và ra quyết định hiệu quả.'
            ]
        }
    },
    {
        code: 'BEOS',
        stack: ['JavaScript', 'C#', 'MSSQL', 'HTML', 'CSS', 'Chart.js', 'jqPlot'],
        en: {
            name: 'BEOS — Battery Evaluation Request System',
            org: 'SK Materials',
            period: '2023.07 – 2023.11',
            role: 'Full-stack Developer',
            intro: [
                'Built to manage and monitor battery analysis requests for the Carbon & Battery department, reducing Excel-based work by 70%.',
                'Focused on making request documents easy to review for both administrators and users.'
            ],
            highlights: [
                'As a full-stack developer, handled both web UI development and Windows service implementation, strengthening my overall development skills.'
            ]
        },
        ko: {
            name: 'BEOS – 전지평가의뢰시스템',
            org: 'SK멀티리얼즈',
            period: '2023.07 ~ 2023.11',
            role: '풀스택 개발',
            intro: [
                'Carbon&Battery 부서의 전지 분석 요청 관리 및 모니터링을 위해 개발된 시스템으로, 기존 엑셀 기반 업무를 70% 절감하였습니다.',
                '관리자와 사용자 모두가 의뢰 문서를 손쉽게 확인할 수 있도록 개선하는 데 중점을 두었습니다.'
            ],
            highlights: [
                '풀스택 개발자로서 웹 UI 개발과 윈도우 서비스 구축을 함께 담당하며 전반적인 개발 역량을 강화하였습니다.'
            ]
        },
        vi: {
            name: 'BEOS — Hệ thống yêu cầu đánh giá pin',
            org: 'SK Materials',
            period: '2023.07 – 2023.11',
            role: 'Lập trình viên Full-stack',
            intro: [
                'Hệ thống quản lý và giám sát yêu cầu phân tích pin cho bộ phận Carbon & Battery, giúp giảm 70% khối lượng công việc dựa trên Excel.',
                'Tập trung giúp cả quản trị viên và người dùng dễ dàng xem tài liệu yêu cầu.'
            ],
            highlights: [
                'Với vai trò lập trình viên full-stack, đảm nhận cả phát triển giao diện web và xây dựng Windows Service, qua đó nâng cao năng lực phát triển toàn diện.'
            ]
        }
    }
];
