const QUESTIONS = [
  // ── Cloud Concepts — LEARNING (15 questions) ───────────────────────
  {
    id: 1,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "What is cloud computing?",
    options: [
      "Storing data on physical servers owned by your company",
      "On-demand delivery of computing services over the internet",
      "A type of network switch used in data centers",
      "A software development methodology"
    ],
    answer: 1,
    explanation: "Cloud computing is the delivery of computing services—servers, storage, databases, networking, software, and analytics—over the internet to offer faster innovation, flexible resources, and economies of scale.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/2-what-is-cloud-computing"
  },
  {
    id: 2,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "Which cloud deployment model uses infrastructure dedicated exclusively to one organization?",
    options: ["Public cloud", "Community cloud", "Private cloud", "Hybrid cloud"],
    answer: 2,
    explanation: "A private cloud consists of cloud computing resources used exclusively by one organization. It can be physically located at your organization's datacenter or hosted by a third-party provider.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-define-cloud-models"
  },
  {
    id: 3,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "What is the primary benefit of the consumption-based pricing model in cloud computing?",
    options: [
      "You pay a fixed monthly fee regardless of usage",
      "You purchase hardware upfront and depreciate it over time",
      "You pay only for the resources you actually use",
      "You lease hardware from the cloud provider for a fixed term"
    ],
    answer: 2,
    explanation: "The consumption-based model means you only pay for what you use. This converts capital expenditure (CapEx) to operational expenditure (OpEx), aligning costs with actual usage.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-describe-consumption-based-model"
  },
  {
    id: 4,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "What does 'high availability' mean in cloud computing?",
    options: [
      "The ability to process large amounts of data quickly",
      "Ensuring services remain accessible with minimal downtime",
      "The ability to store unlimited amounts of data",
      "Running workloads across multiple cloud providers"
    ],
    answer: 1,
    explanation: "High availability refers to a system's ability to remain operational and accessible for a high percentage of time, measured as uptime (e.g., 99.9%). It minimizes downtime through redundancy and failover mechanisms.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud"
  },
  {
    id: 5,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "What is scalability in cloud computing?",
    options: [
      "The ability to recover from disasters automatically",
      "The ability to increase or decrease resources as needed to handle demand",
      "The process of migrating applications to the cloud",
      "The ability to run multiple operating systems simultaneously"
    ],
    answer: 1,
    explanation: "Scalability is the ability to adjust resources to meet demand—scale up when demand increases, scale down to reduce costs when demand decreases.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud"
  },
  {
    id: 6,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "What is the key distinction between elasticity and scalability?",
    options: [
      "They are the same concept",
      "Scalability is manual; elasticity is automatic and immediate adjustment to demand",
      "Elasticity refers to storage; scalability refers to compute",
      "Elasticity is for public clouds only"
    ],
    answer: 1,
    explanation: "While scalability refers to the ability to handle increased load, elasticity specifically means the ability to automatically expand and contract resources dynamically to match demand in real time.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud"
  },
  {
    id: 7,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "What type of expenditure is paying for cloud services on a monthly basis?",
    options: [
      "Capital expenditure (CapEx)",
      "Operational expenditure (OpEx)",
      "Fixed expenditure",
      "Depreciation expenditure"
    ],
    answer: 1,
    explanation: "Operational expenditure (OpEx) is money spent on day-to-day operations, like a monthly cloud bill. This contrasts with CapEx, which is an upfront investment in physical assets like servers.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-describe-consumption-based-model"
  },
  {
    id: 8,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "In the shared responsibility model, who is responsible for the physical security of the datacenter?",
    options: [
      "The customer",
      "The cloud provider",
      "A third-party auditor",
      "Shared equally between customer and provider"
    ],
    answer: 1,
    explanation: "In the shared responsibility model, the cloud provider is always responsible for physical datacenter security, physical network, and physical hosts. The customer is responsible for their data and identities.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/3-describe-shared-responsibility-model"
  },
  {
    id: 9,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "Which cloud service model provides the most control to the customer?",
    options: [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "FaaS (Function as a Service)"
    ],
    answer: 2,
    explanation: "IaaS gives customers the most control—you manage the OS, middleware, runtime, data, and applications. The provider manages virtualization, servers, storage, and networking.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service"
  },
  {
    id: 10,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "A company wants to use cloud services without managing any infrastructure or platform. Which model fits best?",
    options: ["IaaS", "PaaS", "SaaS", "On-premises"],
    answer: 2,
    explanation: "SaaS (Software as a Service) delivers fully managed software applications over the internet. The provider manages everything—infrastructure, platform, and the application. Examples include Microsoft 365 and Salesforce.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service"
  },
  {
    id: 11,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "Which service model is best for a development team that wants to deploy applications without managing underlying infrastructure?",
    options: ["IaaS", "PaaS", "SaaS", "Private cloud"],
    answer: 1,
    explanation: "PaaS (Platform as a Service) provides a managed environment for developing, testing, and deploying applications. Developers focus on code; the provider handles OS, runtime, middleware, and infrastructure.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/3-describe-platform-service"
  },
  {
    id: 12,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "What is a hybrid cloud?",
    options: [
      "A cloud environment that combines services from multiple public cloud providers",
      "A combination of public and private cloud environments connected together",
      "A cloud environment hosted in multiple regions",
      "A cloud designed exclusively for government use"
    ],
    answer: 1,
    explanation: "A hybrid cloud combines private and public cloud environments, allowing data and applications to be shared between them. This gives organizations greater flexibility and more deployment options.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-define-cloud-models"
  },
  {
    id: 13,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "What is fault tolerance in cloud computing?",
    options: [
      "The ability to scale resources rapidly",
      "The ability for a system to continue operating even when components fail",
      "The process of backing up data regularly",
      "A pricing model based on usage"
    ],
    answer: 1,
    explanation: "Fault tolerance means a system continues to function correctly even when one or more of its components fail. This is achieved through redundancy—having backup components that take over when primary ones fail.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud"
  },
  {
    id: 14,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "Which of the following is a benefit of moving to the cloud?",
    options: [
      "Increased need for IT staff to manage hardware",
      "Higher upfront capital expenditure",
      "The ability to go global in minutes",
      "Reduced flexibility in resource allocation"
    ],
    answer: 2,
    explanation: "Cloud providers have datacenters worldwide. You can deploy applications to multiple regions globally in minutes, providing lower latency and a better experience for customers across the world.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud"
  },
  {
    id: 15,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "What does 'agility' mean in cloud computing?",
    options: [
      "The ability to recover data after a disaster",
      "The ability to rapidly provision and deprovision resources",
      "The ability to run legacy applications in the cloud",
      "The reduction of network latency"
    ],
    answer: 1,
    explanation: "Cloud agility refers to the ability to rapidly develop, test, and launch software applications. Resources can be provisioned in minutes without long procurement cycles, enabling faster innovation.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud"
  },

  // ── Azure Architecture & Services — LEARNING (25 questions) ────────
  {
    id: 16,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Core Architecture",
    question: "What is an Azure Region?",
    options: [
      "A single datacenter in a specific location",
      "A geographical area containing one or more datacenters",
      "A group of related Azure resources",
      "A virtual network within Azure"
    ],
    answer: 1,
    explanation: "An Azure region is a set of datacenters deployed within a latency-defined perimeter, connected through a dedicated regional low-latency network. Examples include East US, West Europe, and Southeast Asia.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure"
  },
  {
    id: 17,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Core Architecture",
    question: "What is an Azure Availability Zone?",
    options: [
      "A separate geographic region",
      "A type of virtual machine",
      "Physically separate datacenters within an Azure region",
      "A redundant copy of a storage account"
    ],
    answer: 2,
    explanation: "Azure Availability Zones are physically separate locations within an Azure region. Each zone has independent power, cooling, and networking. They protect applications from datacenter-level failures.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure"
  },
  {
    id: 18,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Core Architecture",
    question: "What is the purpose of an Azure Resource Group?",
    options: [
      "To control network traffic between services",
      "To manage billing across multiple subscriptions",
      "To serve as a logical container for related Azure resources",
      "To define policies for compliance"
    ],
    answer: 2,
    explanation: "A resource group is a container that holds related Azure resources. It enables you to manage, monitor, and organize resources collectively, and apply access controls and policies at the group level.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure"
  },
  {
    id: 19,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "Which Azure service provides scalable virtual machines in the cloud?",
    options: ["Azure App Service", "Azure Virtual Machines", "Azure Container Instances", "Azure Functions"],
    answer: 1,
    explanation: "Azure Virtual Machines is an IaaS offering that lets you create and manage VMs in Azure. You choose the OS, size, and configuration, and you're responsible for managing the VM.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines"
  },
  {
    id: 20,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "Which Azure service is best for hosting a web application without managing virtual machines?",
    options: ["Azure Virtual Machines", "Azure Kubernetes Service", "Azure App Service", "Azure ExpressRoute"],
    answer: 2,
    explanation: "Azure App Service is a fully managed PaaS for hosting web apps, REST APIs, and mobile backends. You deploy your code and Azure handles the infrastructure, OS patching, and scaling.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/7-describe-application-hosting-options"
  },
  {
    id: 21,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "What type of data does Azure Blob Storage store?",
    options: [
      "Relational data in tables",
      "Unstructured data such as documents, images, and videos",
      "Virtual machine disk images",
      "NoSQL key-value pairs"
    ],
    answer: 1,
    explanation: "Azure Blob Storage is Microsoft's object storage solution optimized for storing massive amounts of unstructured data such as text, binary data, images, videos, and log files.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },
  {
    id: 22,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "Which Azure service provides a fully managed relational database?",
    options: ["Azure Cosmos DB", "Azure Table Storage", "Azure SQL Database", "Azure Data Lake"],
    answer: 2,
    explanation: "Azure SQL Database is a fully managed relational database service based on Microsoft SQL Server. It handles backups, patching, and high availability automatically.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },
  {
    id: 23,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "Which Azure database service is designed for globally distributed, multi-model NoSQL data?",
    options: ["Azure SQL Database", "Azure Database for MySQL", "Azure Cosmos DB", "Azure Synapse Analytics"],
    answer: 2,
    explanation: "Azure Cosmos DB is Microsoft's globally distributed, multi-model database service. It supports multiple APIs (SQL, MongoDB, Cassandra, Gremlin, Table) and offers single-digit millisecond response times worldwide.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },
  {
    id: 24,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is Azure Virtual Network (VNet)?",
    options: [
      "A CDN for fast content delivery",
      "An isolated, private network in Azure",
      "A DNS hosting service",
      "A load balancing service"
    ],
    answer: 1,
    explanation: "Azure Virtual Network enables Azure resources to communicate securely with each other, the internet, and on-premises networks. It is the fundamental building block for private networking in Azure.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking"
  },
  {
    id: 25,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is the purpose of Azure Load Balancer?",
    options: [
      "To encrypt traffic between services",
      "To distribute incoming network traffic across multiple backend resources",
      "To connect Azure to on-premises networks",
      "To monitor application performance"
    ],
    answer: 1,
    explanation: "Azure Load Balancer operates at Layer 4 (TCP/UDP) and distributes incoming traffic across healthy backend instances, ensuring high availability by spreading the load.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking"
  },
  {
    id: 26,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is Azure Content Delivery Network (CDN)?",
    options: [
      "A private network between Azure regions",
      "A distributed network of servers for delivering web content with low latency",
      "A backup service for storage accounts",
      "A monitoring tool for web applications"
    ],
    answer: 1,
    explanation: "Azure CDN caches content at strategically placed edge nodes worldwide, providing high bandwidth and low latency when delivering web content to users globally.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking"
  },
  {
    id: 27,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "What is Azure Active Directory (Azure AD)?",
    options: [
      "A directory of Azure resources and their configurations",
      "Microsoft's cloud-based identity and access management service",
      "A database for storing user data",
      "A virtual network service"
    ],
    answer: 1,
    explanation: "Azure Active Directory (now Microsoft Entra ID) is Microsoft's cloud-based identity and access management service. It supports multi-factor authentication, single sign-on, and conditional access.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/2-describe-directory-services"
  },
  {
    id: 28,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "Which Azure compute service runs code on-demand without requiring infrastructure management?",
    options: ["Azure Virtual Machines", "Azure App Service", "Azure Functions", "Azure Container Instances"],
    answer: 2,
    explanation: "Azure Functions is a serverless compute service that lets you run event-triggered code without managing infrastructure. You only pay for the compute time your code consumes.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/6-describe-azure-functions"
  },
  {
    id: 29,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is Azure Kubernetes Service (AKS)?",
    options: [
      "A managed NoSQL database service",
      "A managed container orchestration service",
      "A virtual machine scale set",
      "A private DNS zone"
    ],
    answer: 1,
    explanation: "AKS is a managed Kubernetes service that simplifies deploying, managing, and scaling containerized applications. Azure handles the complexity of Kubernetes management, including health monitoring and maintenance.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers"
  },
  {
    id: 30,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is the difference between Azure Availability Sets and Azure Availability Zones?",
    options: [
      "They are identical — just different names for the same feature",
      "Availability Sets protect from rack-level failures; Availability Zones protect from datacenter-level failures",
      "Availability Zones are for storage; Availability Sets are for VMs only",
      "Availability Sets are a newer feature replacing Availability Zones"
    ],
    answer: 1,
    explanation: "Availability Sets spread VMs across fault domains (racks) and update domains within a single datacenter. Availability Zones spread VMs across physically separate datacenters within a region, offering stronger protection.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines"
  },
  {
    id: 31,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is Azure ExpressRoute?",
    options: [
      "A faster version of Azure VPN Gateway",
      "A private, dedicated connection between on-premises networks and Azure that bypasses the public internet",
      "A CDN service for low-latency content delivery",
      "An automated deployment pipeline"
    ],
    answer: 1,
    explanation: "Azure ExpressRoute extends on-premises networks into Microsoft cloud over a private connection facilitated by a connectivity provider. It offers more reliability, faster speeds, and lower latency than internet-based connections.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/10-describe-azure-expressroute"
  },
  {
    id: 32,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is Azure VPN Gateway used for?",
    options: [
      "Encrypting data at rest in Azure Storage",
      "Sending encrypted traffic between an Azure virtual network and an on-premises location over the public internet",
      "Managing DNS records in Azure",
      "Distributing traffic across multiple regions"
    ],
    answer: 1,
    explanation: "Azure VPN Gateway sends encrypted traffic between an Azure virtual network and an on-premises location over the public internet. You can also use it to send encrypted traffic between Azure virtual networks.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/9-describe-azure-virtual-private-networks"
  },
  {
    id: 33,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "Which Azure service provides serverless containers that run without managing virtual machines?",
    options: ["Azure Kubernetes Service", "Azure Virtual Machine Scale Sets", "Azure Container Instances", "Azure App Service"],
    answer: 2,
    explanation: "Azure Container Instances offers the fastest and simplest way to run containers in Azure without managing virtual machines or adopting a higher-level service. Ideal for simple applications and task automation.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers"
  },
  {
    id: 34,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Resource Management",
    question: "What is Azure Arc?",
    options: [
      "A feature to archive old data in Azure Storage",
      "A service that extends Azure management to on-premises, multi-cloud, and edge environments",
      "A machine learning service for AI workloads",
      "A backup service for virtual machines"
    ],
    answer: 1,
    explanation: "Azure Arc extends Azure management and services to any infrastructure — on-premises, other clouds, or edge. It lets you manage non-Azure resources using Azure tools and apply Azure policies across your entire environment.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/4-describe-purpose-azure-arc"
  },
  {
    id: 35,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Monitoring",
    question: "What is Azure Monitor primarily used for?",
    options: [
      "Managing user access to Azure resources",
      "Collecting, analyzing, and acting on telemetry from Azure and on-premises environments",
      "Provisioning new Azure resources automatically",
      "Encrypting data in Azure"
    ],
    answer: 1,
    explanation: "Azure Monitor maximizes the availability and performance of applications and services by delivering a comprehensive solution for collecting, analyzing, and acting on telemetry from cloud and on-premises environments.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/4-describe-azure-monitor"
  },
  {
    id: 36,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Core Architecture",
    question: "What does Azure Marketplace provide?",
    options: [
      "A marketplace for buying and selling Azure subscriptions",
      "A catalog of certified applications and services from Microsoft and third-party providers",
      "A store for Azure training materials",
      "A platform for trading Azure credits"
    ],
    answer: 1,
    explanation: "Azure Marketplace is an online store offering applications and services built on or designed to integrate with Azure, from Microsoft and thousands of independent software vendors (ISVs).",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/2-what-is-microsoft-azure"
  },
  {
    id: 37,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "Which Azure storage redundancy option replicates data three times within a single datacenter?",
    options: [
      "Geo-Redundant Storage (GRS)",
      "Zone-Redundant Storage (ZRS)",
      "Locally Redundant Storage (LRS)",
      "Read-Access Geo-Redundant Storage (RA-GRS)"
    ],
    answer: 2,
    explanation: "Locally Redundant Storage (LRS) replicates your data three times within a single physical location in the primary region. It is the least expensive replication option and offers the least durability against datacenter-level failures.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy"
  },
  {
    id: 38,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is Azure Virtual Desktop?",
    options: [
      "A virtual machine image for desktop workloads",
      "A desktop and app virtualization service running in the cloud",
      "A remote desktop protocol enhancement for Azure VMs",
      "A managed service for running Windows desktops on-premises"
    ],
    answer: 1,
    explanation: "Azure Virtual Desktop is a desktop and app virtualization service that runs on Azure. It enables users to access Windows desktops and applications from anywhere, on any device.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/4-describe-azure-virtual-desktop"
  },
  {
    id: 39,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "What is Azure DNS?",
    options: [
      "A service that protects against DDoS attacks",
      "A hosting service for DNS domains using Azure infrastructure",
      "A tool for managing network security groups",
      "A private endpoint service"
    ],
    answer: 1,
    explanation: "Azure DNS is a hosting service for DNS domains, providing name resolution using Microsoft Azure infrastructure. You can manage DNS records using the same credentials, billing, and support contract as your other Azure services.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/11-describe-azure-dns"
  },
  {
    id: 40,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Monitoring",
    question: "What is the purpose of Azure Service Health?",
    options: [
      "To monitor the physical health of Azure servers",
      "To provide a personalized view of Azure service status, planned maintenance, and health advisories",
      "To scan Azure resources for security vulnerabilities",
      "To check the compliance status of Azure resources"
    ],
    answer: 1,
    explanation: "Azure Service Health provides a personalized view of the health of Azure services and regions you're using. It notifies you about service issues, planned maintenance, and health advisories affecting your resources.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/3-describe-azure-service-health"
  },

  // ── Azure Management & Governance — LEARNING (20 questions) ────────
  {
    id: 41,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "What is Azure Cost Management used for?",
    options: [
      "A service for automatically scaling resources to reduce cost",
      "A tool to monitor, allocate, and optimize Azure spending",
      "A billing portal for purchasing Azure subscriptions",
      "A reserved instance pricing model"
    ],
    answer: 1,
    explanation: "Azure Cost Management + Billing helps you understand your Azure bill, manage your account and subscriptions, monitor and control Azure spending, and optimize resource use.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/5-describe-azure-cost-management-billing-tool"
  },
  {
    id: 42,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "What is Azure Policy used for?",
    options: [
      "Defining user passwords and security requirements",
      "Creating, assigning, and managing policies that enforce rules and effects on Azure resources",
      "Managing network traffic rules",
      "Scheduling automated tasks"
    ],
    answer: 1,
    explanation: "Azure Policy is a service that lets you create, assign, and manage policies. These policies enforce rules over your resources so they stay compliant with corporate standards and service level agreements.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy"
  },
  {
    id: 43,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Identity & Security",
    question: "What is Azure Role-Based Access Control (RBAC)?",
    options: [
      "A network security feature for controlling traffic",
      "A system for managing who has access to Azure resources and what they can do",
      "A compliance management tool",
      "An encryption service for Azure resources"
    ],
    answer: 1,
    explanation: "Azure RBAC is an authorization system built on Azure Resource Manager that provides fine-grained access management. It allows you to assign roles to users, groups, and applications at different scopes.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/6-describe-role-based-access-control"
  },
  {
    id: 44,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Core Architecture",
    question: "What is the purpose of Management Groups in Azure?",
    options: [
      "To group related Azure resources within a subscription",
      "To organize multiple Azure subscriptions into a hierarchy for policy and access management",
      "To manage billing across Azure services",
      "To group virtual machines for load balancing"
    ],
    answer: 1,
    explanation: "Management groups provide a governance scope above subscriptions. You can organize subscriptions into management groups and apply governance conditions — all subscriptions inherit conditions from their management group.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure"
  },
  {
    id: 45,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "What is the Azure Pricing Calculator used for?",
    options: [
      "Calculating the ROI of moving to Azure",
      "Estimating the monthly cost of Azure services before deployment",
      "Viewing current Azure billing statements",
      "Comparing Azure costs with on-premises costs"
    ],
    answer: 1,
    explanation: "The Azure Pricing Calculator is a free online tool that helps you estimate the costs for Azure products and configurations before you deploy. You can add products, configure them, and get an estimated monthly cost.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/3-describe-azure-pricing-calculator"
  },
  {
    id: 46,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "What does the Azure Total Cost of Ownership (TCO) Calculator help with?",
    options: [
      "Estimating the cost of specific Azure services",
      "Comparing the cost of running workloads on-premises versus in Azure",
      "Calculating the depreciation of existing hardware",
      "Optimizing current Azure spending"
    ],
    answer: 1,
    explanation: "The TCO Calculator helps you estimate cost savings of migrating to Azure versus running workloads on-premises. It accounts for hardware, software, IT staff, and other costs.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/4-describe-total-cost-of-ownership-calculator"
  },
  {
    id: 47,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Monitoring",
    question: "What is Azure Advisor?",
    options: [
      "A training resource for Azure certifications",
      "A personalized cloud consultant that provides best practice recommendations",
      "A compliance management service",
      "A service for managing Azure support tickets"
    ],
    answer: 1,
    explanation: "Azure Advisor analyzes your configurations and usage telemetry and offers personalized, actionable recommendations to optimize Azure resources for reliability, security, operational excellence, performance, and cost.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/2-describe-purpose-azure-advisor"
  },
  {
    id: 48,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "What is Azure Resource Manager (ARM)?",
    options: [
      "A virtual machine management service",
      "The deployment and management service that provides a management layer for Azure resources",
      "A monitoring and alerting service",
      "A network configuration tool"
    ],
    answer: 1,
    explanation: "Azure Resource Manager is the deployment and management service for Azure. It provides a management layer to create, update, and delete resources in your Azure subscription, and enables access control, locks, and tags.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates"
  },
  {
    id: 49,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "What are Azure Tags used for?",
    options: [
      "Classifying network traffic in Azure",
      "Applying name-value pairs to Azure resources for organization and cost tracking",
      "Marking resources as compliant or non-compliant",
      "Flagging resources for deletion"
    ],
    answer: 1,
    explanation: "Tags are metadata name-value pairs applied to Azure resources. They're used for organizing resources, tracking costs by department or project, managing access, and automating operations. Example: Environment=Production.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/6-describe-purpose-tags"
  },
  {
    id: 50,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Identity & Security",
    question: "What is Microsoft Defender for Cloud?",
    options: [
      "An antivirus solution for Azure virtual machines",
      "A unified security management system that strengthens security posture and protects against threats",
      "A compliance auditing service",
      "A DDoS protection service"
    ],
    answer: 1,
    explanation: "Microsoft Defender for Cloud is a cloud security posture management (CSPM) and cloud workload protection platform (CWPP). It provides security recommendations, threat detection, and compliance assessment across Azure and multi-cloud environments.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/9-describe-microsoft-defender-cloud"
  },
  {
    id: 51,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Identity & Security",
    question: "What is Azure Key Vault?",
    options: [
      "A secure, physical location for storing Azure servers",
      "A cloud service for storing and managing cryptographic keys, secrets, and certificates",
      "A service for managing user passwords",
      "A backup service for Azure databases"
    ],
    answer: 1,
    explanation: "Azure Key Vault helps safeguard cryptographic keys and secrets used by cloud applications. It allows you to securely store and tightly control access to tokens, passwords, certificates, API keys, and other secrets.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/8-describe-defense-depth"
  },
  {
    id: 52,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "Which Azure feature allows you to prevent accidental deletion or modification of Azure resources?",
    options: ["Azure Policy", "Azure Tags", "Azure Resource Locks", "Azure RBAC"],
    answer: 2,
    explanation: "Azure resource locks prevent users from accidentally deleting or modifying critical resources. You can apply a lock at subscription, resource group, or resource level. Lock types: ReadOnly (no changes) and Delete (no deletion).",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/4-describe-purpose-resource-locks"
  },
  {
    id: 53,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "What is the purpose of Azure Blueprints?",
    options: [
      "To create architectural diagrams of Azure resources",
      "To define a repeatable set of Azure resources that implement and adhere to standards and requirements",
      "To manage the deployment of Azure VMs",
      "To create network topology maps"
    ],
    answer: 1,
    explanation: "Azure Blueprints enables cloud architects to define a repeatable set of Azure resources implementing organizational standards. It packages ARM templates, RBAC assignments, policies, and resource groups together.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy"
  },
  {
    id: 54,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "What does the Microsoft Privacy Statement describe?",
    options: [
      "A legal agreement between Azure customers and Microsoft",
      "What personal data Microsoft collects and how it uses it",
      "A compliance certification for GDPR",
      "A security assessment report for Azure"
    ],
    answer: 1,
    explanation: "The Microsoft Privacy Statement explains what personal data Microsoft collects, why they collect it, and how they use it. It covers all Microsoft products and services, including Azure.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal"
  },
  {
    id: 55,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "What does an Azure SLA (Service Level Agreement) define?",
    options: [
      "The total cost of Azure services over a year",
      "Microsoft's commitment to uptime and connectivity for specific Azure services",
      "The minimum security requirements for Azure workloads",
      "The geographic boundaries of Azure regions"
    ],
    answer: 1,
    explanation: "An SLA describes Microsoft's commitments for uptime and connectivity. Each Azure service has its own SLA defining the guaranteed availability percentage (e.g., 99.9% or 99.99%) and remedies if the SLA is not met.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-compare-pricing-purchase-options"
  },
  {
    id: 56,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Identity & Security",
    question: "What is the principle of least privilege?",
    options: [
      "Users should always have administrator access to be productive",
      "Users should be given only the minimum level of access required to perform their job",
      "All resources should be accessible to all users by default",
      "Security policies should be as simple as possible"
    ],
    answer: 1,
    explanation: "The principle of least privilege means giving users, processes, or systems only the minimum permissions needed to perform their required functions. This reduces the risk of accidental or malicious misuse of privileges.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/6-describe-role-based-access-control"
  },
  {
    id: 57,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "What is Azure Trust Center?",
    options: [
      "A support portal for Azure technical issues",
      "A resource that provides information about Microsoft's security, privacy, and compliance practices",
      "A security scanning service for Azure workloads",
      "A centralized dashboard for managing Azure resources"
    ],
    answer: 1,
    explanation: "Azure Trust Center provides resources and information about Microsoft's commitment to security, privacy, compliance, and transparency across Azure, including compliance certifications and security practices.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal"
  },
  {
    id: 58,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Monitoring",
    question: "Which Azure service helps identify cost-saving opportunities and optimize resource usage?",
    options: ["Azure Policy", "Azure Monitor", "Azure Advisor", "Microsoft Defender for Cloud"],
    answer: 2,
    explanation: "Azure Advisor provides cost recommendations such as identifying idle VMs, suggesting reserved instances, and recommending right-sizing. It analyzes actual usage and configurations to generate actionable recommendations.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/2-describe-purpose-azure-advisor"
  },
  {
    id: 59,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Core Architecture",
    question: "What is the correct hierarchy of Azure management from broadest to most specific?",
    options: [
      "Resource Group → Subscription → Management Group → Resource",
      "Management Group → Subscription → Resource Group → Resource",
      "Subscription → Management Group → Resource Group → Resource",
      "Resource → Resource Group → Management Group → Subscription"
    ],
    answer: 1,
    explanation: "The Azure management hierarchy flows from broadest to most specific: Management Groups (organize subscriptions) → Subscriptions (billing and access boundary) → Resource Groups (logical containers) → Resources (individual services).",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure"
  },
  {
    id: 60,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "What is Azure Compliance documentation?",
    options: [
      "A guide for writing compliant ARM templates",
      "A collection of resources describing how Azure helps customers meet regulatory standards",
      "A tool for automatically auditing Azure resources for compliance",
      "A training course on Azure governance"
    ],
    answer: 1,
    explanation: "Azure Compliance documentation provides information about how Azure services comply with regulatory requirements, industry standards, and government regulations such as GDPR, ISO 27001, HIPAA, and FedRAMP.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal"
  },

  // ── Cloud Concepts — EXAM (10 questions) ───────────────────────────
  {
    id: 61,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "Your company uses Microsoft 365 for email and collaboration. A security audit asks which responsibilities remain with your company under this model. Which item is your company's responsibility?",
    options: [
      "Patching the underlying server operating systems",
      "Managing the application software and updates",
      "User identities and access to company data",
      "The physical datacenter infrastructure"
    ],
    answer: 2,
    explanation: "In SaaS (like Microsoft 365), the cloud provider manages the application, OS, and infrastructure. Customers always retain responsibility for their data, user identities, and devices—regardless of service model.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/3-describe-shared-responsibility-model"
  },
  {
    id: 62,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "A company is planning to replace its aging on-premises datacenter. The CFO is concerned about the large upfront cost of purchasing new servers. Which cloud characteristic directly addresses this concern?",
    options: [
      "High availability guarantees backed by SLAs",
      "Geographic distribution across global regions",
      "The shift from capital expenditure (CapEx) to operational expenditure (OpEx)",
      "Unlimited elasticity for unpredictable workloads"
    ],
    answer: 2,
    explanation: "Cloud computing converts large upfront capital expenditures (buying hardware) to operational expenditures (paying monthly for services consumed). This eliminates the need to purchase and depreciate physical servers.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-describe-consumption-based-model"
  },
  {
    id: 63,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "A retail company's e-commerce platform experiences 10× traffic spikes during the holiday season and low traffic the rest of the year. The platform automatically adds servers during peak demand and removes them afterward at no extra charge. Which cloud benefit is demonstrated?",
    options: [
      "High availability",
      "Elasticity",
      "Reliability",
      "Fault tolerance"
    ],
    answer: 1,
    explanation: "Elasticity is the ability to automatically expand and contract resources dynamically in real time to match current demand. Unlike basic scalability (which can be manual), elasticity is immediate and automatic.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud"
  },
  {
    id: 64,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "Your organization must keep customer financial data within your country's borders to meet data sovereignty regulations, while using public cloud services for development and testing workloads. Which cloud deployment model best meets both requirements?",
    options: [
      "Public cloud only, using a region within your country",
      "Private cloud only",
      "Hybrid cloud",
      "Multicloud across two public providers"
    ],
    answer: 2,
    explanation: "A hybrid cloud combines private and public environments. Regulated data stays in the private cloud (ensuring data residency compliance) while less-sensitive development workloads run in the public cloud for flexibility and cost savings.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-define-cloud-models"
  },
  {
    id: 65,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "A developer needs to install custom kernel modules and configure the OS at a low level for a specialized compute workload. Which Azure service model provides this level of control?",
    options: [
      "SaaS — the provider manages everything",
      "PaaS — the provider manages OS and runtime",
      "IaaS — the customer manages the OS and installed software",
      "Serverless — the provider allocates resources on demand"
    ],
    answer: 2,
    explanation: "IaaS provides the most control—customers manage the OS, software, and configuration. PaaS abstracts the OS away, so installing kernel modules or custom OS configurations requires IaaS (Azure Virtual Machines).",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service"
  },
  {
    id: 66,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "A company wants to move its existing on-premises applications to Azure with minimal code changes and without re-architecting anything. Which approach best describes this migration strategy?",
    options: [
      "Refactor: rebuild as cloud-native microservices using PaaS",
      "Replace: swap with equivalent SaaS applications",
      "Lift-and-shift: rehost existing workloads on IaaS virtual machines",
      "Re-platform: move to PaaS with minor configuration changes"
    ],
    answer: 2,
    explanation: "Lift-and-shift (rehosting) moves existing applications to IaaS VMs with minimal changes. It's the fastest migration path because you replicate on-premises configurations in the cloud without code changes.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service"
  },
  {
    id: 67,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "A startup launches a product and unexpectedly gains customers in 15 countries within weeks. They need to deploy their application in additional regions to reduce latency for those users. What cloud benefit makes this possible without building physical infrastructure?",
    options: [
      "Elasticity for dynamic resource scaling",
      "High availability through redundant components",
      "Global reach — deploying to Azure regions worldwide within minutes",
      "Fault tolerance through automatic failover"
    ],
    answer: 2,
    explanation: "Cloud providers have datacenters worldwide, enabling global deployment within minutes. This global reach would require years and significant capital investment to replicate with on-premises infrastructure.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud"
  },
  {
    id: 68,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "A company's primary web server fails during a transaction. Because a standby server automatically takes over, users experience no interruption. Which cloud concept is demonstrated?",
    options: [
      "Vertical scalability",
      "Fault tolerance",
      "Agility",
      "Cost predictability"
    ],
    answer: 1,
    explanation: "Fault tolerance is the ability to continue operating without interruption when a component fails. Redundant standby servers that automatically take over demonstrate fault tolerance, keeping the service running despite the failure.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud"
  },
  {
    id: 69,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "An application team wants to increase the memory and CPU of their Azure virtual machine to handle a larger workload without adding more VM instances. What type of scaling is this?",
    options: [
      "Horizontal scaling (scale out)",
      "Elastic scaling",
      "Vertical scaling (scale up)",
      "Geographic scaling"
    ],
    answer: 2,
    explanation: "Vertical scaling (scale up/down) means increasing or decreasing the capabilities of a single resource—such as adding more CPU or RAM to a VM. Horizontal scaling (scale out/in) means adding or removing resource instances.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud"
  },
  {
    id: 70,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Computing",
    question: "An enterprise uses Azure for most workloads but also runs workloads on AWS to avoid vendor lock-in and leverage specific AWS capabilities. Which cloud deployment model describes this arrangement?",
    options: [
      "Hybrid cloud — combining private and public environments",
      "Private cloud — single-organization infrastructure",
      "Multicloud — using multiple public cloud providers simultaneously",
      "Community cloud — shared infrastructure for a specific industry"
    ],
    answer: 2,
    explanation: "Multicloud uses multiple public cloud providers simultaneously. This differs from hybrid cloud, which combines private infrastructure with a public cloud. Multicloud is common for avoiding vendor lock-in.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-define-cloud-models"
  },

  // ── Azure Architecture & Services — EXAM (17 questions) ────────────
  {
    id: 71,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Core Architecture",
    question: "A company needs its application to remain available even if an entire Azure datacenter within a region goes offline due to a power failure. Which Azure feature should they use when deploying their virtual machines?",
    options: [
      "Availability Sets — spread VMs across fault and update domains",
      "Availability Zones — deploy VMs across physically separate datacenters in the region",
      "Region Pairs — replicate to a secondary region 300+ miles away",
      "Virtual Machine Scale Sets — automatically add more VMs on failure"
    ],
    answer: 1,
    explanation: "Availability Zones are physically separate datacenters within a region, each with independent power, cooling, and networking. Deploying across zones protects against a single datacenter failure. Availability Sets only protect within one datacenter (rack/update domain level).",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure"
  },
  {
    id: 72,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A company's storage account must allow reading data from the secondary region continuously during normal operations—not just after a failover. Which redundancy option should they choose?",
    options: [
      "GRS — geo-redundant storage replicating to a paired region",
      "LRS — three copies within a single datacenter",
      "RA-GRS — read-access geo-redundant storage",
      "ZRS — synchronous replication across three availability zones"
    ],
    answer: 2,
    explanation: "RA-GRS (Read-Access Geo-Redundant Storage) replicates to a secondary paired region like GRS, but also enables reading from the secondary region at any time—before any failover. Standard GRS replicates to the secondary but does NOT allow reads until a failover is triggered.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy"
  },
  {
    id: 73,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A company needs to migrate 200 TB of archived video files from an on-premises datacenter to Azure Blob Storage. Their internet connection is 50 Mbps and they cannot afford weeks of upload time. What is the most appropriate Azure migration solution?",
    options: [
      "Azure Migrate — online migration service for datacenter workloads",
      "AzCopy — command-line tool for copying blobs",
      "Azure File Sync — bidirectional sync with cloud tiering",
      "Azure Data Box — physical device shipped to your location"
    ],
    answer: 3,
    explanation: "Azure Data Box is a physical offline migration device (up to 80 TB usable per device). For 200 TB, you'd use multiple Data Box devices. When network bandwidth makes online transfer impractical, Data Box is the right choice. Azure Migrate is for online assessments and migration of servers, not bulk data.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/5-identify-azure-data-migration-options"
  },
  {
    id: 74,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A company's compliance policy requires that storage data be replicated synchronously across three availability zones within the primary Azure region, with no secondary region replication. Which redundancy option meets this requirement at the lowest cost?",
    options: [
      "LRS — three copies within a single datacenter",
      "GRS — primary LRS plus asynchronous secondary region",
      "ZRS — synchronous replication across three availability zones",
      "RA-GZRS — zone-redundant primary plus readable secondary region"
    ],
    answer: 2,
    explanation: "ZRS (Zone-Redundant Storage) replicates synchronously across three availability zones in the primary region. LRS only replicates within a single datacenter. GRS/RA-GZRS add unnecessary secondary region replication. ZRS alone satisfies this requirement at the lowest cost.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy"
  },
  {
    id: 75,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A developer tries to set the Archive access tier on an Azure storage account to make it the default for all new blobs. This fails. What is the correct explanation?",
    options: [
      "Archive tier requires a Premium storage account",
      "Archive tier is not supported in all Azure regions",
      "Archive tier can only be set at the individual blob level, not at the account level",
      "Archive tier requires a separate storage account from other tiers"
    ],
    answer: 2,
    explanation: "The Archive access tier can only be set on individual blobs, not at the storage account level. Hot, Cool, and Cold tiers can be set at either the account level (as the default) or the blob level. Archive has no account-level setting.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },
  {
    id: 76,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A startup wants to deploy a web application on Azure. The team does not want to manage virtual machines, OS patches, or scaling infrastructure. They just want to deploy their code. Which Azure service is the best fit?",
    options: [
      "Azure Virtual Machines with auto-scaling and load balancer",
      "Azure App Service",
      "Azure Container Instances",
      "Azure Kubernetes Service"
    ],
    answer: 1,
    explanation: "Azure App Service is a fully managed PaaS for web apps. It handles OS patching, infrastructure management, and automatic scaling. The team deploys code only. VMs require OS management, ACI is for containers, and AKS is an orchestration platform with operational overhead.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/7-describe-application-hosting-options"
  },
  {
    id: 77,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A team needs to run a containerized data-processing job that starts when a file is uploaded to Azure Blob Storage, runs for a few minutes, then terminates. No persistent orchestration or scaling is needed. Which compute service provides the simplest solution?",
    options: [
      "Azure Kubernetes Service (AKS) — managed container orchestration",
      "Azure Container Instances (ACI) — run containers without managing VMs",
      "Azure Virtual Machine Scale Sets — auto-scaling VM group",
      "Azure App Service — managed web app hosting"
    ],
    answer: 1,
    explanation: "Azure Container Instances (ACI) is the fastest, simplest way to run a container without managing VMs or an orchestration platform. It's ideal for short-lived tasks. AKS adds orchestration complexity that is unnecessary here.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers"
  },
  {
    id: 78,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A development team writes code that must execute automatically whenever a message is added to an Azure Storage Queue. The code runs for less than one minute. They want to pay only for execution time with no idle infrastructure cost. Which service best fits?",
    options: [
      "Azure App Service with a WebJob",
      "Azure Virtual Machines with a polling script",
      "Azure Functions with a Queue trigger",
      "Azure Container Apps with a message consumer"
    ],
    answer: 2,
    explanation: "Azure Functions is serverless and event-driven. A Queue Storage trigger fires the function when a message arrives. You pay only for the milliseconds of CPU time used while the function executes. No VMs or containers remain running between invocations.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/6-describe-azure-functions"
  },
  {
    id: 79,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A team stores 5 TB of log files in Azure Blob Storage. The files are accessed once a month for analysis and must be retained for at least 45 days. They want lower storage costs than the Hot tier. Which access tier should they choose?",
    options: [
      "Hot — lowest access cost, highest storage cost",
      "Cool — lower storage cost, 30-day minimum retention",
      "Cold — lower storage cost, 90-day minimum retention",
      "Archive — lowest storage cost, 180-day minimum retention"
    ],
    answer: 1,
    explanation: "Cool tier offers lower storage costs than Hot and has a 30-day minimum retention period. Since the data is retained for 45 days, Cool is a valid choice. Cold requires 90 days of minimum retention, which exceeds the requirement and would trigger early-deletion charges.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },
  {
    id: 80,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A company has a Windows file server on-premises that employees access with familiar tools. They want to centralize the data in Azure Files while keeping frequently accessed files available locally for fast access. Which Azure feature supports this?",
    options: [
      "AzCopy — command-line tool for one-time file copy to Azure",
      "Azure Data Box — offline physical migration device",
      "Azure File Sync with cloud tiering enabled",
      "Azure Migrate — online server migration service"
    ],
    answer: 2,
    explanation: "Azure File Sync with cloud tiering keeps frequently accessed files cached on the local Windows file server while storing less-accessed files only in Azure Files. It provides bidirectional continuous sync, unlike AzCopy which is one-directional.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/6-identify-azure-file-movement-options"
  },
  {
    id: 81,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A company is lifting and shifting a legacy HR application to Azure. The application requires domain join, LDAP queries, and Kerberos authentication. The team cannot modify the application. Which Azure service can provide these protocols without deploying domain controllers?",
    options: [
      "Microsoft Entra ID — cloud-based identity with OAuth 2.0 and OpenID Connect",
      "Microsoft Entra Domain Services — managed domain with LDAP and Kerberos/NTLM",
      "Microsoft Entra Connect — synchronizes on-premises AD with Entra ID",
      "Azure Active Directory B2C — consumer identity management"
    ],
    answer: 1,
    explanation: "Microsoft Entra Domain Services provides managed domain services including domain join, LDAP, and Kerberos/NTLM authentication—without deploying or managing domain controllers. Entra ID uses modern protocols (OAuth/OIDC) and doesn't support LDAP or Kerberos natively.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/2-describe-directory-services"
  },
  {
    id: 82,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A company requires a connection from their on-premises datacenter to Azure that does NOT traverse the public internet, provides guaranteed bandwidth, and has predictable latency. Which Azure service should they use?",
    options: [
      "Azure VPN Gateway — encrypted tunnel over the public internet",
      "Azure Virtual Network Peering — connects Azure VNets",
      "Azure ExpressRoute — private dedicated connection to Azure",
      "Azure Content Delivery Network — edge caching for fast delivery"
    ],
    answer: 2,
    explanation: "Azure ExpressRoute provides a private, dedicated connection to Azure that bypasses the public internet entirely, offering guaranteed bandwidth and consistent, predictable latency. VPN Gateway uses the public internet (encrypted), which does not meet the requirement.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/10-describe-azure-expressroute"
  },
  {
    id: 83,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A fleet of factory sensors sends temperature readings to the cloud every 5 seconds. The cloud also needs to push configuration updates and threshold changes back to the sensors. Which Azure IoT service supports this bidirectional communication pattern?",
    options: [
      "Azure IoT Central — simplified SaaS IoT platform",
      "Azure IoT Edge — runs cloud workloads on devices",
      "Azure IoT Hub — bidirectional device-cloud communication",
      "Azure Event Grid — event routing service"
    ],
    answer: 2,
    explanation: "Azure IoT Hub is designed for secure bidirectional communication: device-to-cloud telemetry AND cloud-to-device commands. IoT Central is a simplified SaaS platform built on IoT Hub but doesn't expose the raw bidirectional messaging. IoT Edge runs workloads locally on the device.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/"
  },
  {
    id: 84,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A company needs storage that survives a complete Azure regional disaster. During normal operations, they only need to read from the primary region. If a failover is required, the secondary region will become primary. What is the most cost-effective redundancy option?",
    options: [
      "ZRS — zone-redundant within the primary region only",
      "LRS — three copies in a single datacenter",
      "GRS — geo-redundant with secondary region, no read access before failover",
      "RA-GRS — geo-redundant with read access to secondary at all times"
    ],
    answer: 2,
    explanation: "GRS replicates to a secondary paired region, protecting against full regional failure. Since the team only needs to read from the secondary during a failover (not during normal operations), GRS is sufficient and costs less than RA-GRS, which enables reads at all times.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy"
  },
  {
    id: 85,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A company runs a microservices application with 20 containerized services that need automatic load balancing, rolling deployments, and self-healing restarts when a container crashes. Which Azure service is designed for this?",
    options: [
      "Azure Container Instances (ACI) — fast, simple single-container runs",
      "Azure Kubernetes Service (AKS) — managed container orchestration platform",
      "Azure App Service — managed web app hosting",
      "Azure Functions — serverless event-driven compute"
    ],
    answer: 1,
    explanation: "AKS manages fleets of containers with orchestration features: load balancing, rolling updates, health checks, and self-healing. ACI is for simple single-container tasks with no orchestration. The scale and features required here need AKS.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers"
  },
  {
    id: 86,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A group of virtual machines serves a public website. During business hours, load is high and 10 VMs are needed. At night, 2 VMs suffice. The team wants this scaling to happen automatically based on CPU utilization. Which Azure feature provides this?",
    options: [
      "Azure Availability Sets — distribute VMs across fault and update domains",
      "Azure Availability Zones — deploy VMs across physically separate datacenters",
      "Azure Virtual Machine Scale Sets — auto-scaling group of identical VMs",
      "Azure Load Balancer — distribute traffic across backend VMs"
    ],
    answer: 2,
    explanation: "Azure VM Scale Sets create and manage a group of identical VMs that automatically scale based on demand metrics (like CPU). Azure Load Balancer distributes traffic but does not add or remove VMs. Availability Sets/Zones provide resiliency but not auto-scaling.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines"
  },
  {
    id: 87,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A company's application needs to securely retrieve a database connection string at startup without hardcoding it in the source code. Access to the secret must be logged, and the secret must be rotatable without redeploying the app. Which Azure service is designed for this?",
    options: [
      "Azure Storage — store the connection string in a blob",
      "Azure Key Vault — centralized, audited storage for secrets and keys",
      "Azure Active Directory — identity and access management",
      "Azure Disk Encryption — encrypts VM disks"
    ],
    answer: 1,
    explanation: "Azure Key Vault stores secrets, keys, and certificates with full access audit logging. Applications use managed identities to retrieve secrets at runtime—no hardcoding. Secrets can be rotated in Key Vault without redeploying the application.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/8-describe-defense-depth"
  },

  // ── Azure Management & Governance — EXAM (13 questions) ────────────
  {
    id: 88,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "A company's compliance team wants to prevent anyone—including subscription owners—from accidentally deleting a production SQL database. Which Azure feature should they implement?",
    options: [
      "Azure RBAC — assign a custom role that removes delete permissions",
      "Azure Policy with a deny effect — block non-compliant resource configurations",
      "Azure Resource Lock (Delete lock) — prevents deletion even by owners",
      "Azure Blueprints — define repeatable governance-compliant environments"
    ],
    answer: 2,
    explanation: "Azure Resource Locks override RBAC permissions—even a subscription Owner cannot delete a resource that has a Delete lock without first removing the lock. RBAC-based deny assignments can be bypassed by owners. Locks are specifically designed to prevent accidental critical-resource deletion.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/4-describe-purpose-resource-locks"
  },
  {
    id: 89,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "An organization wants to ensure that all newly deployed Azure virtual machines can only be created in the West Europe and North Europe regions. Which Azure service enforces this configuration restriction?",
    options: [
      "Azure RBAC — controls who can perform create actions",
      "Azure Resource Locks — prevents modification of existing resources",
      "Azure Policy — controls what configurations and locations are allowed",
      "Azure Management Groups — organizes subscriptions for governance"
    ],
    answer: 2,
    explanation: "Azure Policy enforces rules about resource configurations—such as allowed deployment regions. RBAC controls who can perform actions (like 'create VM'), but does not restrict which configurations or locations are permitted. Policy is the right tool for configuration compliance.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy"
  },
  {
    id: 90,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Core Architecture",
    question: "A large enterprise has 80 Azure subscriptions across different business units. The security team needs to enforce a set of compliance policies across ALL subscriptions simultaneously without configuring each one individually. Which Azure feature enables this?",
    options: [
      "Assign an Azure Policy initiative to each subscription manually",
      "Azure Resource Groups — logical containers for organizing resources",
      "Azure Management Groups — apply governance across multiple subscriptions in a hierarchy",
      "Azure Blueprints — define repeatable governance artifacts per subscription"
    ],
    answer: 2,
    explanation: "Management groups sit above subscriptions. Policies and RBAC assigned to a management group are automatically inherited by all subscriptions under it. This enables consistent governance across all 80 subscriptions from a single policy assignment.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure"
  },
  {
    id: 91,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "A solutions architect wants to estimate the monthly cost of running a new Azure environment with specific VM sizes, storage tiers, and network configurations before creating any resources. Which Azure tool should they use?",
    options: [
      "Microsoft Cost Management — track and analyze actual Azure spending",
      "Azure Advisor — recommendations based on existing resource usage",
      "Azure Pricing Calculator — estimate costs before deploying resources",
      "Azure Monitor — collect and analyze telemetry from deployed resources"
    ],
    answer: 2,
    explanation: "The Azure Pricing Calculator estimates costs BEFORE deploying resources. No charges are incurred and no resources are created. Microsoft Cost Management tracks ACTUAL costs after deployment. The distinction 'before vs. after deployment' is key on the exam.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/3-describe-azure-pricing-calculator"
  },
  {
    id: 92,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "After deploying resources, a team discovers their Azure costs are 40% higher than expected. They want to break down spending by department (using tags) and receive an automatic alert when 80% of the monthly budget is consumed. Which Azure tool provides both capabilities?",
    options: [
      "Azure Pricing Calculator — estimate and model costs before deployment",
      "Azure Advisor — personalized recommendations to optimize resources",
      "Microsoft Cost Management — analyze actual spending and create budget alerts",
      "Azure Policy — enforce resource configuration standards"
    ],
    answer: 2,
    explanation: "Microsoft Cost Management tracks actual Azure spending in real time, allows breaking down costs by tags (e.g., Department=Finance), and supports creating budgets with alert thresholds (like 80% consumed). The Pricing Calculator only works before deployment.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/5-describe-azure-cost-management-billing-tool"
  },
  {
    id: 93,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Monitoring",
    question: "An operations team wants to receive automatic notifications about Azure outages and planned maintenance windows that affect specifically the services and regions they have deployed. Which Azure tool provides this personalized view?",
    options: [
      "Azure Status — global view of all Azure services and regions",
      "Azure Service Health — personalized view of your services and regions",
      "Azure Monitor — operational telemetry from your deployed resources",
      "Azure Advisor — best-practice recommendations for your resources"
    ],
    answer: 1,
    explanation: "Azure Service Health provides a personalized, sign-in-required view of health events—outages, maintenance, and advisories—for the specific Azure services and regions your environment uses. Azure Status is public and covers ALL Azure globally, not personalized.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/3-describe-azure-service-health"
  },
  {
    id: 94,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Monitoring",
    question: "A support ticket reports that a specific Azure virtual machine is responding slowly. The system administrator needs to determine whether the performance issue is caused by an Azure platform problem or by the application running inside the VM. Which tool provides this information?",
    options: [
      "Azure Status — global health of all Azure services",
      "Azure Service Health > Service Health — health of Azure services in your regions",
      "Azure Service Health > Resource Health — health status of a specific resource",
      "Azure Monitor Alerts — operational threshold alerts for your resources"
    ],
    answer: 2,
    explanation: "Resource Health (within Azure Service Health) provides the health of a specific individual resource (e.g., a single VM) and indicates whether any issue is on Azure's side or the customer's. It is the narrowest scope in the Service Health hierarchy.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/3-describe-azure-service-health"
  },
  {
    id: 95,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "A company runs stable production workloads on Azure VMs 24/7 and wants to commit for 3 years to get the best pricing. They know exactly which VM sizes and regions they'll use and the usage is predictable. Which pricing option maximizes savings?",
    options: [
      "Azure Spot Virtual Machines — use unused Azure capacity at deep discounts",
      "Azure Savings Plan for Compute — commit to hourly spend across flexible compute types",
      "Azure Reserved VM Instances — commit to specific VM sizes for 1 or 3 years",
      "Pay-as-you-go — maximum flexibility with no commitment"
    ],
    answer: 2,
    explanation: "Azure Reserved VM Instances provide the highest discount for predictable, stable workloads with specific VM types committed for 1-3 years. Savings Plans are more flexible but typically offer slightly less discount than Reservations for a known, fixed workload.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-compare-pricing-purchase-options"
  },
  {
    id: 96,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "A data analytics team runs overnight batch jobs that process large datasets. The jobs can tolerate interruptions and are designed to restart from checkpoints. They want the lowest possible compute cost. Which Azure VM pricing model is most appropriate?",
    options: [
      "Reserved Instances (3-year) — commit to specific VM size for maximum discount",
      "Azure Savings Plan — commit to hourly spend across compute types",
      "Azure Spot Virtual Machines — use surplus Azure capacity at up to 90% discount",
      "Standard pay-as-you-go — flexible hourly billing"
    ],
    answer: 2,
    explanation: "Azure Spot VMs use unused Azure capacity at significantly reduced costs (up to 90% savings). Azure can evict them when capacity is needed. They're ideal for fault-tolerant, interruptible batch jobs that can checkpoint and restart—exactly this scenario.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-compare-pricing-purchase-options"
  },
  {
    id: 97,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "A company applies the tag Environment=Production to a resource group and then creates a new VM inside it. After creation, the VM has no tags. The team expected the VM to inherit the resource group tag automatically. Which statement is correct?",
    options: [
      "Tags DO inherit automatically — this is an Azure bug",
      "Tags inherit only for storage accounts, not VMs",
      "Tags do NOT inherit automatically from resource groups or subscriptions",
      "Tags inherit only when set via the Azure portal, not via CLI"
    ],
    answer: 2,
    explanation: "Azure tags do NOT propagate automatically down the hierarchy. A resource does not inherit tags from its resource group or subscription. To enforce consistent tagging, use Azure Policy to require specific tags on new resources or to automatically apply them.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/6-describe-purpose-tags"
  },
  {
    id: 98,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "A compliance officer needs to review third-party audit reports (such as ISO 27001 and SOC 2) and documentation about how Microsoft handles data and maintains security for Azure. Where should they go?",
    options: [
      "Microsoft Defender for Cloud — security posture and compliance dashboard",
      "Azure Compliance Manager — automated assessment tool for regulatory compliance",
      "Service Trust Portal — Microsoft's public compliance documentation hub",
      "Microsoft Purview — data governance and classification for your own data"
    ],
    answer: 2,
    explanation: "The Service Trust Portal (servicetrust.microsoft.com) is where Microsoft publishes third-party audit reports, compliance certifications, and documentation about its own security and privacy practices. Defender for Cloud assesses YOUR resources; Purview governs YOUR data.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal"
  },
  {
    id: 99,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "An organization's policy requires that every Azure resource must have a CostCenter tag. Any deployment attempt without this tag should be automatically blocked. Which Azure feature implements this enforcement?",
    options: [
      "Azure Resource Locks — prevent modification or deletion of resources",
      "Azure RBAC deny assignments — restrict specific users from creating resources",
      "Azure Policy with a deny effect — block non-compliant resource deployments",
      "Azure Blueprints — package governance artifacts for repeatable deployments"
    ],
    answer: 2,
    explanation: "Azure Policy with a 'deny' effect prevents resource creation when conditions aren't met—such as a missing required tag. RBAC controls WHO can act, not WHAT configurations are allowed. Locks protect existing resources, not new deployments.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy"
  },
  {
    id: 100,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "A DevOps team wants to deploy Azure infrastructure using code. They want a declarative language that is simpler and more readable than raw JSON ARM templates, while still using the Azure Resource Manager engine. Which tool should they use?",
    options: [
      "Azure PowerShell — imperative cmdlets that call the Azure REST API",
      "Azure CLI — imperative Bash-style commands for managing Azure resources",
      "Azure Bicep — declarative IaC language that compiles to ARM JSON",
      "Terraform — open-source IaC tool that supports multiple cloud providers"
    ],
    answer: 2,
    explanation: "Azure Bicep is a declarative IaC language that compiles to ARM JSON templates, using the same ARM engine. It is simpler and more readable than raw ARM JSON. Azure CLI and PowerShell are imperative (step-by-step commands), not declarative templates.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates"
  },

  // ── Cloud Concepts — LEARNING (4 additional) ───────────────────────
  {
    id: 101,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "What is reliability in cloud computing?",
    options: [
      "The ability to scale resources on demand",
      "The ability to recover from failures and continue functioning",
      "The guaranteed uptime percentage defined in an SLA",
      "The ability to forecast and control cloud spending"
    ],
    answer: 1,
    explanation: "Reliability is the ability of a system to recover from failures and continue to function. It is one of the pillars of the Microsoft Azure Well-Architected Framework. Cloud's decentralized, multi-region design supports reliability—if one region fails, others remain operational.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud"
  },
  {
    id: 102,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "What are the two types of cloud predictability?",
    options: [
      "Hardware predictability and software predictability",
      "Performance predictability and cost predictability",
      "Availability predictability and security predictability",
      "Scaling predictability and failover predictability"
    ],
    answer: 1,
    explanation: "Cloud predictability has two forms: performance predictability (predicting the resources needed to deliver a positive experience, enabled by autoscaling and load balancing) and cost predictability (forecasting cloud spend, enabled by real-time tracking and analytics tools).",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud"
  },
  {
    id: 103,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "What is the difference between 'management OF the cloud' and 'management IN the cloud'?",
    options: [
      "They are synonyms — both refer to managing Azure resources",
      "Management OF the cloud = managing resources themselves; management IN the cloud = how you interact with your environment",
      "Management OF the cloud uses the portal; management IN the cloud uses APIs",
      "Management OF the cloud is for IaaS; management IN the cloud is for SaaS"
    ],
    answer: 1,
    explanation: "Management OF the cloud means managing the cloud resources themselves (auto-scaling, deploying from templates, monitoring health, auto-replacing failing resources). Management IN the cloud means how you interact with your environment — through the portal, CLI, REST API, or PowerShell.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud"
  },
  {
    id: 104,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Storage",
    question: "Which Azure storage service stores large amounts of structured, non-relational data using a key-attribute store?",
    options: [
      "Azure Blob Storage — unstructured object storage",
      "Azure Files — managed SMB/NFS file shares",
      "Azure Table Storage — NoSQL key-attribute store",
      "Azure Queue Storage — message queue service"
    ],
    answer: 2,
    explanation: "Azure Table Storage is a NoSQL store for large amounts of structured, non-relational data. It uses a flexible key-attribute schema. It is simpler and cheaper than Cosmos DB for workloads that don't need global distribution or multiple APIs.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },

  // ── Azure Architecture & Services — EXAM (19 additional) ───────────
  {
    id: 105,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "A company's finance team wants real-time dashboards showing whether they are on track to stay within their monthly cloud budget. The infrastructure team needs the platform to automatically provision the right amount of compute for fluctuating traffic. Which two cloud benefits address these needs?",
    options: [
      "High availability and fault tolerance",
      "Cost predictability and performance predictability",
      "Elasticity and scalability",
      "Reliability and governance"
    ],
    answer: 1,
    explanation: "Cost predictability lets you forecast and track cloud spending in real time. Performance predictability ensures the right resources are available for positive user experiences through autoscaling and load balancing. These are the two distinct types of cloud predictability.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud"
  },
  {
    id: 106,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Cloud Benefits",
    question: "A company is migrating to Azure. Under a PaaS model, who is responsible for protecting workloads from distributed denial-of-service (DDoS) attacks on the platform infrastructure?",
    options: [
      "The customer — they must purchase and configure Azure DDoS Protection",
      "Shared equally — both provider and customer each configure half of the protection",
      "The cloud provider — DDoS protection for the platform is included",
      "A third-party security vendor — required for all cloud deployments"
    ],
    answer: 2,
    explanation: "In PaaS (and SaaS), DDoS protection of the underlying platform infrastructure is handled by the cloud provider. This is a key cloud security benefit—customers automatically gain from the provider's investment in large-scale DDoS mitigation without additional configuration.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/4-security-governance-cloud"
  },
  {
    id: 107,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A storage account uses GZRS replication. A compliance requirement is added: read access to the secondary region must be available at all times without triggering a failover. What change is needed?",
    options: [
      "Switch to GRS — it allows reading from the secondary region",
      "Switch to RA-GZRS — same replication as GZRS but with always-on read access to the secondary",
      "Switch to ZRS — adds secondary region read access",
      "No change needed — GZRS already allows reading from the secondary"
    ],
    answer: 1,
    explanation: "GZRS replicates using ZRS in the primary and LRS in the secondary, but does NOT allow reading from the secondary until a failover. RA-GZRS is identical in replication strategy but adds read access to the secondary region at all times. This mirrors the GRS vs RA-GRS relationship.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy"
  },
  {
    id: 108,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "An application passes work items between services using Azure Queue Storage. A developer reports that messages containing a large JSON payload (500 KB) are being rejected. What is the cause?",
    options: [
      "Queue Storage only supports text messages, not JSON",
      "The message exceeds the 64 KB maximum size limit for Azure Queue Storage messages",
      "Queue Storage requires Premium tier for messages over 256 KB",
      "The storage account region does not support large messages"
    ],
    answer: 1,
    explanation: "Azure Queue Storage messages have a hard maximum size of 64 KB per message. For larger payloads, the standard pattern is to store the data in Azure Blob Storage and put only a reference (blob URL or ID) into the queue message.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },
  {
    id: 109,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A data science team needs to build and train a custom machine learning model on historical sales data to forecast demand. They need experiment tracking, model versioning, and a managed training environment. Which Azure service is designed for this?",
    options: [
      "Azure AI Services — prebuilt AI capabilities via REST APIs",
      "Azure OpenAI Service — generative AI with enterprise governance",
      "Azure Machine Learning — custom model development and lifecycle management",
      "Azure Cognitive Search — AI-powered full-text search over your data"
    ],
    answer: 2,
    explanation: "Azure Machine Learning is specifically designed for building, training, and managing CUSTOM models with experiment tracking, model versioning, and lifecycle management. Azure AI Services provides prebuilt AI capabilities without custom model training.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/"
  },
  {
    id: 110,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Monitoring",
    question: "A web application is experiencing intermittent slowdowns. The team wants to automatically collect request rates, response times, failure rates, and dependency call performance data to investigate — without modifying the application code. Which Azure service provides this?",
    options: [
      "Azure Monitor Alerts — notify when a metric threshold is crossed",
      "Azure Log Analytics — query workspace for collected monitoring data",
      "Application Insights — application performance monitoring with agentless deployment",
      "Azure Service Health — health status of Azure services you use"
    ],
    answer: 2,
    explanation: "Application Insights is an Azure Monitor feature for web application monitoring. It can be deployed agentlessly (no code changes) or with an SDK, and automatically collects request rates, response times, failure rates, and dependency telemetry.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/4-describe-azure-monitor"
  },
  {
    id: 111,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Monitoring",
    question: "An operations engineer needs to investigate why an Azure VM's CPU spiked at 3 AM last Tuesday by writing a custom query to filter and correlate logs across multiple resources for the past 7 days. Which Azure tool provides this query capability?",
    options: [
      "Azure Monitor Alerts — reactive notifications when a condition is met",
      "Azure Service Health — shows Azure platform incidents at the given time",
      "Azure Log Analytics — interactive query interface for Azure Monitor data",
      "Azure Advisor — best-practice recommendations based on resource config"
    ],
    answer: 2,
    explanation: "Azure Log Analytics is the interactive query interface within Azure Monitor. You write Kusto Query Language (KQL) queries to filter, aggregate, and correlate log and metric data across multiple resources and time ranges.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/4-describe-azure-monitor"
  },
  {
    id: 112,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A security architect describes Azure's layered security approach. Starting from the outermost layer and moving inward toward the data, what is the correct order of the first three layers?",
    options: [
      "Network → Perimeter → Identity and access",
      "Physical security → Identity and access → Perimeter",
      "Compute → Application → Data",
      "Identity and access → Physical security → Perimeter"
    ],
    answer: 1,
    explanation: "Azure's Defense-in-Depth model has seven layers from outside to inside: Physical security → Identity and access → Perimeter → Network → Compute → Application → Data. Physical security is always the outermost layer; Data is the innermost.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/8-describe-defense-depth"
  },
  {
    id: 113,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A company's security policy states: 'Assume every request may already be compromised. Verify identity on every access attempt regardless of network location, and grant only the minimum access needed.' Which security model does this describe?",
    options: [
      "Defense-in-Depth — multiple layered security barriers around resources",
      "Perimeter security — trust traffic once it is inside the corporate network",
      "Zero Trust — verify every request explicitly; assume breach; use least privilege",
      "Shared responsibility — divide security duties between provider and customer"
    ],
    answer: 2,
    explanation: "Zero Trust assumes breach and verifies every request as if it came from an uncontrolled network. Its three principles are: verify explicitly (always authenticate/authorize), use least privilege access, and assume breach. This replaces old perimeter-based models where internal traffic was automatically trusted.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/7-describe-zero-trust-model"
  },
  {
    id: 114,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A user signs in to Azure by entering their password and then approving a push notification on their smartphone. Which two MFA factor categories are being combined?",
    options: [
      "Something you have and something you are",
      "Something you know (password) and something you have (phone notification)",
      "Something you know and something you are",
      "Something you are (device) and something you have (approval)"
    ],
    answer: 1,
    explanation: "MFA uses at least two of three factor categories: something you KNOW (password), something you HAVE (phone receiving push notification), and something you ARE (biometric). A password combined with a phone notification = 'know' + 'have'.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-describe-authentication-methods"
  },
  {
    id: 115,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A company wants to enable passwordless sign-in for employees using a physical hardware device that plugs into USB or taps via NFC. The device must not require a username or password and must be resistant to phishing. Which Microsoft Entra ID option meets this?",
    options: [
      "Windows Hello for Business — biometric/PIN tied to a designated Windows PC",
      "Microsoft Authenticator app — push notification or code on a smartphone",
      "FIDO2 security keys — open-standard phishing-resistant hardware devices",
      "SMS one-time passcodes — code sent to a registered phone number"
    ],
    answer: 2,
    explanation: "FIDO2 security keys are open-standard hardware devices (USB, NFC, Bluetooth) used for passwordless sign-in. They require no username or password and are phishing-resistant by design. Windows Hello ties to a designated PC; Authenticator uses a smartphone app.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-describe-authentication-methods"
  },
  {
    id: 116,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A company wants users accessing corporate apps from unrecognized devices or outside the office network to complete MFA, while users on known, compliant devices within the office network can sign in without MFA. Which feature enables this behavior?",
    options: [
      "Always-on MFA — require MFA for every sign-in regardless of context",
      "Azure RBAC — assign roles that control access based on group membership",
      "Conditional Access — apply access policies based on user, location, and device signals",
      "Microsoft Entra Domain Services — group policy enforcement in the cloud"
    ],
    answer: 2,
    explanation: "Conditional Access evaluates signals (who, where, what device) and applies policies—such as requiring MFA only when risk is detected (unknown device, unusual location). It enables context-aware authentication rather than blanket MFA for all sign-ins.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/5-describe-conditional-access"
  },
  {
    id: 117,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A company wants to allow employees from a partner organization to access a shared Microsoft Teams channel. The partner users should authenticate with their own organizational credentials and should NOT appear as guest accounts in your directory. Which capability supports this?",
    options: [
      "B2B Collaboration — partners sign in with their own identity and are added as guest users in your directory",
      "B2B Direct Connect — mutual trust between two Entra tenants; external users stay in their own directory",
      "External ID for Customers (B2C) — consumer-facing identity management",
      "Microsoft Entra Connect — syncs on-premises AD users to Entra ID"
    ],
    answer: 1,
    explanation: "B2B Direct Connect establishes a mutual two-way trust between Entra tenants. External users access shared resources (like Teams channels) but are NOT added to your directory. B2B Collaboration adds external users as guest accounts in your directory.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/4-describe-external-identities"
  },
  {
    id: 118,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A developer uses Azure Functions to build an order processing workflow that calls an external payment API, waits up to 10 minutes for a payment callback, then updates the database. Standard Azure Functions time out after a few minutes. Which Azure Functions capability handles this long-running stateful workflow?",
    options: [
      "Standard stateless Functions — scale automatically for any duration",
      "Durable Functions — stateful orchestration for long-running workflows",
      "Azure Container Apps — long-running background container processes",
      "Azure Logic Apps — low-code workflow automation with connectors"
    ],
    answer: 1,
    explanation: "Durable Functions extend Azure Functions with stateful orchestration. They persist state across invocations, enabling long-running workflows with waits, fan-out/fan-in patterns, and external event handling—things standard stateless Functions cannot do across invocations.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/6-describe-azure-functions"
  },
  {
    id: 119,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A team needs to run several containerized microservices with built-in HTTP load balancing and automatic scaling based on HTTP traffic, but does not want to manage Kubernetes or Kubernetes manifests. Which Azure service is the best fit?",
    options: [
      "Azure Container Instances (ACI) — simple container runs with no built-in scaling",
      "Azure Kubernetes Service (AKS) — full Kubernetes management platform",
      "Azure Container Apps — serverless containers with built-in scaling and load balancing",
      "Azure App Service — managed web app hosting for code-based deployments"
    ],
    answer: 2,
    explanation: "Azure Container Apps provides built-in HTTP load balancing, automatic scaling (including scale-to-zero), and managed container runtime without any Kubernetes knowledge. ACI has no built-in scaling or load balancing. AKS requires Kubernetes expertise.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers"
  },
  {
    id: 120,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A manufacturing company runs AI-powered quality inspection workloads that analyze camera images on the factory floor. Due to strict sub-100ms latency requirements, the analysis cannot be sent to the cloud. Which Azure IoT service enables running these workloads directly on the local factory devices?",
    options: [
      "Azure IoT Hub — bidirectional device-to-cloud communication",
      "Azure IoT Central — simplified SaaS IoT solution builder platform",
      "Azure IoT Edge — extends Azure cloud workloads to run on local edge devices",
      "Azure Event Hubs — high-throughput event ingestion pipeline"
    ],
    answer: 2,
    explanation: "Azure IoT Edge deploys containerized cloud workloads (modules) to run locally on edge devices—directly at the factory floor in this case. This eliminates round-trip latency to the cloud and allows processing close to the data source.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/"
  },
  {
    id: 121,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Resource Management",
    question: "A sysadmin on a Linux machine wants to manage Azure resources from the terminal using familiar Bash syntax. A colleague prefers PowerShell cmdlets on Windows. Both want the same management capabilities. Which statement about these tools is correct?",
    options: [
      "Azure CLI supports more features than Azure PowerShell",
      "Azure PowerShell can only run on Windows machines",
      "Azure CLI and Azure PowerShell are functionally equivalent — the only meaningful difference is syntax",
      "Only Azure PowerShell can manage advanced networking; Azure CLI is limited to basic operations"
    ],
    answer: 2,
    explanation: "Azure CLI (Bash-style) and Azure PowerShell (cmdlet-style) are functionally equivalent — both call the same Azure REST API and support the same operations. Both run on Windows, Linux, and Mac, and both are available in Azure Cloud Shell. The choice comes down to preferred syntax.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell"
  },
  {
    id: 122,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Core Architecture",
    question: "A U.S. Department of Defense agency must deploy Azure workloads that meet strict government compliance requirements. The environment must be physically isolated from standard commercial Azure regions and operated exclusively by screened U.S. personnel. Which Azure offering addresses this?",
    options: [
      "Azure Availability Zones — physically separate datacenters within a region",
      "Azure Region Pairs — geographically separated regions 300+ miles apart",
      "Azure Government sovereign regions — isolated Azure instances for U.S. government compliance",
      "Azure Private Link — private connectivity to Azure services without public internet"
    ],
    answer: 2,
    explanation: "Azure Government sovereign regions (US DoD Central, US Gov Virginia, US Gov Arizona) are physically isolated from commercial Azure, operated by screened U.S. personnel, and meet strict government compliance requirements (FedRAMP High, DoD SRG IL4/IL5). They are separate from standard Azure infrastructure.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure"
  },
  {
    id: 123,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A company stores legal compliance documents in Azure Blob Storage. The documents are accessed approximately once per year for audits and must be retained for 7 years. The team wants the absolute lowest storage cost and can accept several hours of retrieval time when needed. Which blob access tier is optimal?",
    options: [
      "Hot — lowest access latency but highest storage cost",
      "Cool — lower storage cost, 30-day minimum retention",
      "Cold — lower storage cost, 90-day minimum retention",
      "Archive — lowest storage cost, offline storage with rehydration latency of hours"
    ],
    answer: 3,
    explanation: "Archive tier has the lowest storage cost and is designed for rarely accessed data (less than once a year) where retrieval latency of hours is acceptable. For 7-year compliance documents accessed once annually, Archive provides maximum cost savings. Its minimum retention period is 180 days.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },

  // ── Azure Management & Governance — LEARNING (1) + EXAM (6) ────────
  {
    id: 124,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "What is Microsoft Purview?",
    options: [
      "A network security service for filtering and inspecting traffic",
      "A unified data governance, risk, and compliance solution",
      "A tool for managing Azure resource configuration policies",
      "A backup and disaster recovery service for Azure data"
    ],
    answer: 1,
    explanation: "Microsoft Purview is a family of data governance, risk, and compliance solutions. It provides a unified view of your data across on-premises, multicloud, and SaaS environments, enabling automated data discovery, sensitive data classification, and end-to-end data lineage.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/2-describe-purpose-microsoft-purview"
  },
  {
    id: 125,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "An organization must comply with a security standard that requires 60 individual Azure Policy definitions to be enforced simultaneously (encryption, VM sizes, tagging, etc.). Which Azure Policy feature lets them manage and track compliance for all 60 policies as a single unit?",
    options: [
      "Azure Policy with an audit effect — flag non-compliant resources without blocking",
      "Azure Policy Initiative — a named group of related policy definitions for a single compliance goal",
      "Azure Management Groups — organize subscriptions to inherit policies",
      "Azure Blueprints — package policies with ARM templates and RBAC"
    ],
    answer: 1,
    explanation: "An Azure Policy Initiative (also called a policy set) groups multiple related policy definitions under a single name. You assign the initiative once and compliance is tracked across all included policies as a whole. The 'Enable Monitoring in Azure Security Center' initiative is a well-known example with 100+ policies.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy"
  },
  {
    id: 126,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "A production storage account has a ReadOnly lock applied. A subscription Owner attempts to update the storage account's access tier from Hot to Cool and receives an authorization error. What is the correct explanation?",
    options: [
      "The Owner needs to be assigned the Contributor role to modify storage accounts",
      "Storage accounts cannot be modified after creation — a new account is required",
      "The ReadOnly lock prevents ANY modification, including by subscription Owners; the lock must be removed first",
      "ReadOnly locks only prevent deletions — updates should still be permitted"
    ],
    answer: 2,
    explanation: "A ReadOnly lock prevents ALL modifications AND deletions for ALL users, regardless of RBAC role—including subscription Owners. A Delete lock allows modifications but prevents deletion. To modify a ReadOnly-locked resource, the lock must first be explicitly removed by someone with the appropriate permissions.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/4-describe-purpose-resource-locks"
  },
  {
    id: 127,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "A company with an Enterprise Agreement (EA) has been rapidly consuming their Azure credit balance. At which two consumption thresholds does Microsoft Cost Management automatically generate credit alerts for EA customers?",
    options: [
      "50% and 100%",
      "75% and 95%",
      "80% and 100%",
      "90% and 100%"
    ],
    answer: 3,
    explanation: "For Enterprise Agreement customers, Microsoft Cost Management automatically generates credit alerts at exactly 90% and 100% of the Azure credit balance. These are generated automatically without any manual budget configuration. Standard budget alerts (for non-EA customers) require manual setup.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/5-describe-azure-cost-management-billing-tool"
  },
  {
    id: 128,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Cost Management",
    question: "A network engineer is reviewing an Azure bill and notices charges for outbound data transfers between Azure regions, but no charges for data coming INTO Azure from the internet. What Azure billing concept explains this asymmetry?",
    options: [
      "Availability Zone pricing — intra-zone transfers are free; inter-zone transfers are billed",
      "Billing zones — geographic groupings for data transfer pricing where inbound is free and outbound is charged",
      "Region pair pricing — transfers within a pair are free; transfers outside the pair are charged",
      "Subscription boundary pricing — intra-subscription transfers are always free"
    ],
    answer: 1,
    explanation: "Azure uses 'billing zones' (geographic groupings of regions, completely different from Availability Zones) to price outbound data transfers. Data flowing INTO Azure is generally free. Data leaving Azure datacenters (outbound) is priced based on the billing zone. This billing-zone concept has nothing to do with physical AZ resiliency.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-compare-pricing-purchase-options"
  },
  {
    id: 129,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Governance & Compliance",
    question: "A data governance team needs to automatically scan, discover, and classify sensitive personal data (PII) stored in Azure SQL databases, on-premises SQL Server instances, and Amazon S3 buckets from a single platform. Which Azure service provides this?",
    options: [
      "Azure Policy — enforces resource configuration standards across Azure",
      "Microsoft Defender for Cloud — security posture management and threat protection",
      "Microsoft Purview — unified data governance and classification across clouds and on-premises",
      "Azure Security Center — monitors and improves security across Azure resources"
    ],
    answer: 2,
    explanation: "Microsoft Purview provides unified data governance including automated data discovery, sensitive data classification, and end-to-end lineage across Azure, on-premises, and other clouds (including Amazon S3). Azure Policy governs resource configurations, not the content or classification of data.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/2-describe-purpose-microsoft-purview"
  },
  {
    id: 130,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "A DevOps team re-runs the same ARM template against a subscription that already has the resources deployed. Instead of creating duplicate resources, Azure updates existing resources to match the template's declared state. What property of ARM templates makes this possible?",
    options: [
      "Modularity — templates can reference and compose other templates",
      "Idempotency — deploying the same template repeatedly produces the same result",
      "Orchestration — ARM deploys resources in the correct dependency order",
      "Extensibility — templates can execute scripts during deployment"
    ],
    answer: 1,
    explanation: "ARM templates are idempotent — you can deploy the same template multiple times and always get the same end state. If a resource already exists and matches the template, ARM leaves it unchanged. If it differs or doesn't exist, ARM creates or updates it. This makes templates safe to re-run.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates"
  },

  // ── Azure Architecture & Services — targeted gap-fill ──────────────
  {
    id: 131,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A security team wants to allow only traffic on port 443 (HTTPS) to reach an Azure VM and block all other inbound connections. They also want to block all outbound traffic except to a specific IP range. Which Azure feature defines these allow/deny rules at the network level?",
    options: [
      "Azure Firewall — managed cloud firewall for VNet-level protection",
      "Network Security Group (NSG) — inbound and outbound traffic rules for resources",
      "Azure DDoS Protection — defends against volumetric network attacks",
      "Azure Bastion — secure browser-based VM access without public IPs"
    ],
    answer: 1,
    explanation: "A Network Security Group (NSG) contains security rules that allow or deny inbound and outbound traffic to Azure resources. Each rule specifies source/destination IP ranges, ports, and protocol. NSGs can be attached to a subnet or directly to a VM's network interface.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking"
  },
  {
    id: 132,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A company hosts a web application and wants to route requests with the URL path '/api/*' to one backend server pool and requests with '/images/*' to a separate pool optimized for static content. Azure Load Balancer cannot route based on URL paths. Which Azure service provides this Layer 7 HTTP routing capability?",
    options: [
      "Azure Load Balancer — Layer 4 TCP/UDP distribution across backend instances",
      "Azure Traffic Manager — DNS-based global traffic routing between regions",
      "Azure Application Gateway — Layer 7 HTTP/HTTPS load balancer with URL path-based routing",
      "Azure Front Door — global CDN and load balancer for web applications"
    ],
    answer: 2,
    explanation: "Azure Application Gateway is a Layer 7 (HTTP/HTTPS) load balancer that understands HTTP traffic. It supports URL path-based routing, SSL/TLS termination, cookie-based session affinity, and an optional Web Application Firewall (WAF). Azure Load Balancer works at Layer 4 (TCP/UDP) and cannot inspect or route based on HTTP URL paths.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking"
  },
  {
    id: 133,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A company's primary datacenter hosts business-critical applications on virtual machines. They need continuous replication to Azure so that, if the datacenter fails completely, they can fail over to Azure within minutes with minimal data loss. Which Azure service is designed for this disaster recovery scenario?",
    options: [
      "Azure Backup — managed service for scheduled backups and point-in-time restore",
      "Azure Migrate — assesses and migrates on-premises workloads to Azure",
      "Azure Site Recovery — continuously replicates workloads for automated disaster recovery failover",
      "Azure Data Box — physical device for offline bulk data transfer to Azure"
    ],
    answer: 2,
    explanation: "Azure Site Recovery (ASR) is a disaster recovery service that continuously replicates on-premises VMs (Hyper-V, VMware) and Azure VMs to a secondary location. In a disaster, workloads fail over automatically. Azure Backup performs scheduled backups for restore scenarios but does not provide continuous replication for rapid failover.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines"
  },
  {
    id: 134,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A company needs to centrally back up Azure VMs, SQL Server databases running inside Azure VMs, on-premises Windows servers, and Azure Files shares — all with configurable retention policies and a single management console. Which Azure service provides this?",
    options: [
      "Azure Site Recovery — replicates workloads to a secondary site for disaster recovery",
      "Azure Blob Storage with lifecycle management — automatically tiers blobs to lower-cost storage",
      "Azure Backup — centralized managed backup service for Azure and on-premises workloads",
      "Azure File Sync — bidirectionally syncs on-premises file servers with Azure Files"
    ],
    answer: 2,
    explanation: "Azure Backup is a managed, centralized backup service that protects Azure VMs, SQL/SAP databases in VMs, Azure Files, and on-premises servers (via MARS agent). Backups are stored in a Recovery Services Vault with configurable retention. It is distinct from Site Recovery, which focuses on disaster recovery replication rather than scheduled backup and restore.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines"
  },
  {
    id: 135,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "What is Single Sign-On (SSO) in Microsoft Entra ID?",
    options: [
      "A method of signing in using biometrics instead of a password",
      "The ability to sign in once with one identity and access multiple applications without re-authenticating",
      "A feature that requires a second authentication factor for each individual app",
      "A service that synchronizes user accounts from on-premises Active Directory to the cloud"
    ],
    answer: 1,
    explanation: "SSO lets users sign in once with a single identity and access all connected applications — Microsoft 365, SaaS apps, internal tools — without re-entering credentials. It reduces password sprawl, lowers help desk incidents, and simplifies lifecycle management: removing one identity immediately revokes access to all connected apps.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/2-describe-directory-services"
  },
  {
    id: 136,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Identity & Security",
    question: "A company wants passwordless sign-in for office workers who each have a dedicated Windows laptop with a built-in fingerprint reader. Sign-in should use the fingerprint reader and be cryptographically tied to that specific device. Which Microsoft Entra ID passwordless option fits this scenario?",
    options: [
      "FIDO2 security keys — open-standard hardware devices (USB/NFC) not tied to a specific computer",
      "Microsoft Authenticator app — phone-based push notification confirmed with phone biometric",
      "Windows Hello for Business — biometric or PIN authentication tied to a designated Windows device",
      "SMS one-time passcodes — a verification code sent to a registered mobile number"
    ],
    answer: 2,
    explanation: "Windows Hello for Business uses biometrics (fingerprint, face scan) or a PIN that is cryptographically bound to a specific designated Windows device. It is ideal for employees with their own assigned PC. FIDO2 keys are portable hardware tokens not tied to a device; Authenticator uses a smartphone.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-describe-authentication-methods"
  },
  {
    id: 137,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Core Architecture",
    question: "A team is deploying Azure services and notices that most require selecting a region, but one service asks for no region at all. Which Azure service is a global service that does NOT require region selection at deployment?",
    options: [
      "Azure Virtual Machines — must be placed in a specific region",
      "Azure Blob Storage — region selection required for redundancy and data residency",
      "Microsoft Entra ID — global identity service with no region requirement",
      "Azure SQL Database — must be deployed to a specific region"
    ],
    answer: 2,
    explanation: "Microsoft Entra ID is a global, non-regional service — no region is selected when using it. Other non-regional services include Azure Traffic Manager and Azure DNS. Most Azure resources (VMs, storage, databases) require a region. Global services are inherently resilient to single region and zone failures.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure"
  },
  {
    id: 138,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "A developer tries to create a storage account named 'My-Storage_2024' and gets a validation error. Which naming rule was violated?",
    options: [
      "The name is too short — storage account names require at least 10 characters",
      "Storage account names must be 3–24 characters using only lowercase letters and numbers — no hyphens, underscores, or uppercase",
      "The name must begin with the Azure region abbreviation",
      "Storage account names must be unique only within the resource group, not globally"
    ],
    answer: 1,
    explanation: "Azure Storage account names must be 3–24 characters and contain only lowercase letters and numbers — no hyphens, underscores, uppercase letters, or special characters. Names must also be globally unique across all of Azure, because the name becomes part of the storage endpoint URL (e.g., mystorageaccount.blob.core.windows.net).",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/2-describe-azure-storage-accounts"
  },
  {
    id: 139,
    type: "learning",
    topic: "Azure Architecture & Services",
    module: "Storage",
    question: "Which Azure storage service provides block-level storage volumes that attach directly to virtual machines, similar to a physical hard drive?",
    options: [
      "Azure Blob Storage — object storage for unstructured data like images and videos",
      "Azure Files — managed cloud file shares accessed via SMB or NFS protocol",
      "Azure Managed Disks — block-level storage volumes for Azure virtual machines",
      "Azure Queue Storage — message queue for decoupled service communication"
    ],
    answer: 2,
    explanation: "Azure Managed Disks are block-level storage volumes managed by Azure for use with virtual machines. Azure handles disk durability and availability. Available types include Standard HDD (lowest cost), Standard SSD, Premium SSD (high performance), and Ultra Disk (mission-critical I/O). You simply attach the disk to a VM.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services"
  },
  {
    id: 140,
    type: "exam",
    topic: "Azure Architecture & Services",
    module: "Compute & Networking",
    question: "A security team requires that Azure VMs have no public IP addresses and no RDP or SSH ports exposed to the internet, yet administrators still need to connect to those VMs for management. Which Azure service provides secure browser-based RDP/SSH connectivity without public IPs?",
    options: [
      "Azure VPN Gateway — encrypted tunnel between your network and an Azure VNet",
      "Azure ExpressRoute — private dedicated connection bypassing the public internet",
      "Azure Bastion — managed PaaS service for TLS-based browser RDP/SSH to VMs",
      "Network Security Group — filters inbound and outbound traffic to Azure resources"
    ],
    answer: 2,
    explanation: "Azure Bastion is a managed PaaS service that provides secure RDP and SSH connectivity to Azure VMs directly through the Azure portal over TLS — without the VM needing a public IP or open RDP/SSH ports. This eliminates exposure to port scanning and brute-force attacks on those ports.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking"
  },

  // ── Azure Management & Governance — targeted gap-fill ──────────────
  {
    id: 141,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Core Architecture",
    question: "An enterprise architect is designing a management group hierarchy for a large organization with many subsidiaries. Which two statements correctly describe the limits of Azure management groups?",
    options: [
      "Management groups can be nested up to 10 levels, and a directory supports unlimited groups",
      "Management groups can be nested up to 6 levels deep (not counting root or subscription level), and a directory supports up to 10,000 management groups",
      "Each management group can have multiple parent groups for flexible cross-team governance",
      "A subscription can belong to multiple management groups at the same time"
    ],
    answer: 1,
    explanation: "Azure management groups can be nested up to 6 levels deep, not counting the Tenant Root Group at the top or the subscription level at the bottom. A single Entra ID directory supports up to 10,000 management groups. Each management group and each subscription can have exactly ONE parent, forming a strict single-root hierarchy.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure"
  },
  {
    id: 142,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Core Architecture",
    question: "A student wants to start learning Azure for free without a credit card. Which Azure account option is designed for students and does NOT require a credit card?",
    options: [
      "Azure free account — $200 credit for 30 days plus 12 months of free services, but requires a credit card for identity verification",
      "Azure free student account — $100 credit valid for 12 months plus free developer tools, and no credit card required",
      "Azure pay-as-you-go — no upfront cost but requires a credit card and bills monthly",
      "Azure Dev/Test subscription — discounted pricing for developers, requires a Visual Studio subscription"
    ],
    answer: 1,
    explanation: "The Azure free student account provides $100 credit valid for 12 months, select free Azure services for 12 months, and free developer tools — with NO credit card required. The standard Azure free account provides $200 credit for the first 30 days plus 12 months of popular free services, but does require a credit card for identity verification.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/3-get-started-azure-accounts"
  },

  // ── Service Types — additional questions (IDs 143–150) ─────────────
  {
    id: 143,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "In the shared responsibility model, who is responsible for managing the operating system in an IaaS deployment?",
    options: [
      "The cloud provider",
      "A third-party vendor",
      "The customer",
      "Responsibility is shared equally between provider and customer"
    ],
    answer: 2,
    explanation: "In IaaS, the customer manages the OS, middleware, runtime, and applications. The cloud provider manages the physical hardware, network, and virtualization layer. This is the key distinction between IaaS and PaaS, where the provider takes over OS management.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service"
  },
  {
    id: 144,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "In a SaaS model, who is responsible for managing the application and its underlying infrastructure?",
    options: [
      "The customer",
      "The cloud provider",
      "Shared equally between customer and provider",
      "An independent software vendor separate from the cloud provider"
    ],
    answer: 1,
    explanation: "In SaaS, the cloud provider manages everything from physical infrastructure up through the application itself. The customer is only responsible for their own data and user access management. This is the highest level of managed service.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service"
  },
  {
    id: 145,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "Which of the following is an example of SaaS?",
    options: [
      "Azure Virtual Machines",
      "Azure App Service",
      "Microsoft 365",
      "Azure Kubernetes Service"
    ],
    answer: 2,
    explanation: "Microsoft 365 (formerly Office 365) is a SaaS offering — the provider manages the application and users access it via browser or thin client. Azure VMs are IaaS, Azure App Service is PaaS, and Azure Kubernetes Service is PaaS.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service"
  },
  {
    id: 146,
    type: "learning",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "Moving from IaaS to PaaS to SaaS, how does the customer's management responsibility change?",
    options: [
      "It increases — SaaS requires the most customer management",
      "It stays the same — all models have equal shared responsibility",
      "It decreases — the provider manages more as you move toward SaaS",
      "It depends entirely on the cloud provider's contract"
    ],
    answer: 2,
    explanation: "As you move from IaaS → PaaS → SaaS, the cloud provider takes on progressively more responsibility. In IaaS the customer manages OS, runtime, and apps; in PaaS the customer manages apps and data; in SaaS the customer manages only data and access.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service"
  },
  {
    id: 147,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "A company migrates its email system to a SaaS email platform. Under the shared responsibility model, who is responsible for ensuring the company's email data is properly classified and protected?",
    options: [
      "The SaaS provider — they manage all aspects of the service including data",
      "The company — customers are always responsible for their own data regardless of service model",
      "The company's internet service provider",
      "Responsibility is split 50/50 between the SaaS provider and the customer"
    ],
    answer: 1,
    explanation: "Regardless of cloud service model (IaaS, PaaS, or SaaS), the customer always retains responsibility for their data — how it is classified, governed, and protected. The provider manages the platform, but data ownership and protection responsibility stays with the customer.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service"
  },
  {
    id: 148,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "A security team needs to apply OS security patches to their workloads. They have workloads on Azure Virtual Machines (IaaS) and others on Azure App Service (PaaS). Which statement is correct?",
    options: [
      "OS patching is required for both IaaS and PaaS workloads by the customer",
      "OS patching is the customer's responsibility only for IaaS (VMs) — Azure manages the OS for PaaS (App Service)",
      "OS patching is the customer's responsibility only for PaaS — VMs patch themselves automatically",
      "Neither IaaS nor PaaS requires OS patching from the customer in Azure"
    ],
    answer: 1,
    explanation: "In IaaS (Azure VMs), the customer owns and must patch the guest OS. In PaaS (Azure App Service), the cloud provider manages the underlying OS and runtime — the customer only manages their application code and data. This is one of the key practical benefits of PaaS.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service"
  },
  {
    id: 149,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "An organization wants to use a CRM system. They have no desire to manage servers, code, or databases — they just want to log in and use the software. Which cloud service model fits this requirement?",
    options: [
      "IaaS — for maximum control over the CRM infrastructure",
      "PaaS — to build and deploy their own custom CRM application",
      "SaaS — ready-to-use software fully managed by the provider",
      "Hybrid cloud — to keep CRM data on-premises while accessing it online"
    ],
    answer: 2,
    explanation: "SaaS delivers ready-to-use software over the internet with the provider managing everything. This is the right model for organizations that want to consume software without any infrastructure, runtime, or development responsibility.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service"
  },
  {
    id: 150,
    type: "exam",
    topic: "Cloud Concepts",
    module: "Service Types",
    question: "A company runs a web app on Azure App Service (PaaS) and a database on Azure Virtual Machines (IaaS). Which responsibility belongs to the company and not to Azure?",
    options: [
      "Patching the physical host servers",
      "Managing the network switches in the datacenter",
      "Patching the OS on the database VM and managing the web app code",
      "Replacing failed datacenter hardware"
    ],
    answer: 2,
    explanation: "For IaaS (the database VM), the company must patch and maintain the guest OS. For PaaS (App Service), the company manages the application code and data — Azure handles the OS and runtime. Physical hardware, host servers, and datacenter infrastructure are always Azure's responsibility.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service"
  },

  // ── Resource Management — additional questions (IDs 151–158) ───────
  {
    id: 151,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "What is the Azure Portal?",
    options: [
      "A command-line interface for managing Azure resources via scripts",
      "A web-based graphical interface for creating, managing, and monitoring Azure resources",
      "A REST API endpoint for Azure Resource Manager",
      "A local desktop application for Azure development"
    ],
    answer: 1,
    explanation: "The Azure Portal (portal.azure.com) is a web-based, graphical user interface for managing all Azure resources. It provides a visual alternative to command-line tools and supports drag-and-drop dashboards, resource visualization, and guided resource creation.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/2-describe-interacting-azure-portal"
  },
  {
    id: 152,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "What is Azure Cloud Shell?",
    options: [
      "A dedicated physical server reserved for shell access in Azure datacenters",
      "A browser-accessible shell environment pre-configured with Azure CLI, PowerShell, and developer tools",
      "A local terminal extension for Visual Studio Code",
      "A paid enterprise add-on for scripting Azure resources"
    ],
    answer: 1,
    explanation: "Azure Cloud Shell is a browser-accessible, authenticated shell environment available in the Azure Portal and at shell.azure.com. It comes pre-installed with Azure CLI, Azure PowerShell, and other tools — no local installation required, and it's automatically authenticated with your Azure account.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell"
  },
  {
    id: 153,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "What is the main benefit of Infrastructure as Code (IaC)?",
    options: [
      "It eliminates the need for Azure subscriptions",
      "It converts existing application code into cloud infrastructure automatically",
      "It allows infrastructure to be defined, versioned, and deployed through code rather than manual configuration",
      "It is only available through Azure DevOps pipelines"
    ],
    answer: 2,
    explanation: "Infrastructure as Code (IaC) allows infrastructure configuration to be written as code files, stored in version control, reviewed, tested, and deployed consistently. This eliminates manual configuration drift, enables repeatable deployments, and supports collaboration through standard code review practices.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates"
  },
  {
    id: 154,
    type: "learning",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "Which command correctly identifies Azure CLI syntax (as opposed to Azure PowerShell)?",
    options: [
      "Get-AzResourceGroup",
      "az group list",
      "azure resource-group get",
      "ARM.GroupList()"
    ],
    answer: 1,
    explanation: "Azure CLI commands always start with `az`, followed by the resource type and action (e.g., `az group list`, `az vm create`). `Get-AzResourceGroup` is Azure PowerShell syntax, which uses verb-noun cmdlet format. Both tools provide equivalent functionality — the difference is syntax and scripting environment preference.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell"
  },
  {
    id: 155,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "A system administrator needs to perform a one-time manual configuration in Azure. A developer needs to automate the same task type to run nightly. Which tools are best suited for each?",
    options: [
      "Azure Portal for both tasks",
      "Azure Portal for the one-time task; Azure CLI or PowerShell for the automated nightly task",
      "Azure CLI for both tasks",
      "ARM templates for both tasks"
    ],
    answer: 1,
    explanation: "The Azure Portal's graphical interface suits one-time manual tasks. For automation and scheduled work, Azure CLI or Azure PowerShell are appropriate because they can be scripted, scheduled via cron or task scheduler, and version-controlled. ARM templates are best for infrastructure deployments, not operational tasks.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell"
  },
  {
    id: 156,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "A developer is on a laptop without Azure CLI installed and needs to quickly run an Azure CLI command to check a resource's status. They have browser access. What is the quickest solution?",
    options: [
      "Install Azure CLI locally before running the command",
      "Use Azure Cloud Shell in the browser — pre-installed, pre-authenticated, no local setup needed",
      "Use Azure PowerShell on the local machine instead",
      "Submit an Azure support ticket to run the command on their behalf"
    ],
    answer: 1,
    explanation: "Azure Cloud Shell is accessible directly from a browser via the Azure Portal or shell.azure.com. It requires no installation, is pre-authenticated with the user's Azure account, and has Azure CLI and Azure PowerShell pre-installed — making it the fastest option when no local tooling is available.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell"
  },
  {
    id: 157,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "A team finds their JSON ARM templates verbose and hard to read. They want a simpler, more concise syntax that still uses the Azure Resource Manager engine. Which tool should they adopt?",
    options: [
      "Terraform — an open-source IaC tool by HashiCorp",
      "Azure Bicep — a domain-specific language that compiles to ARM JSON",
      "Azure CLI — command-line tool for managing resources",
      "Azure Blueprints — for governance and compliance at scale"
    ],
    answer: 1,
    explanation: "Azure Bicep is a domain-specific language (DSL) that compiles down to ARM JSON templates. It offers a cleaner, more concise syntax while using the same Azure Resource Manager engine underneath — making it the natural upgrade path from raw ARM JSON for teams already using ARM templates.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates"
  },
  {
    id: 158,
    type: "exam",
    topic: "Azure Management & Governance",
    module: "Resource Management",
    question: "A company wants to ensure dev, test, and prod Azure environments are deployed with exactly the same configuration every time. Which approach best guarantees this?",
    options: [
      "Manually configure each environment using the Azure Portal",
      "Use ARM templates or Bicep — deploy the same template to each environment for consistent, repeatable results",
      "Copy and paste Azure CLI commands between environments",
      "Use Azure Advisor to recommend the same settings for each environment"
    ],
    answer: 1,
    explanation: "ARM templates and Bicep are declarative IaC tools — they define the desired end state of the infrastructure. Deploying the same template to multiple environments guarantees identical configuration and eliminates the manual inconsistencies that come from portal clicks or copy-pasted scripts.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates"
  }
];
