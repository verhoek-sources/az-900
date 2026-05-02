# AZ-900 Microsoft Azure Fundamentals — Comprehensive Knowledge Summary

> Source: Official MS Learn content, all 11 modules read in full.  
> Purpose: Authoritative reference for writing nuanced, scenario-based exam questions.

---

## MODULE 1 — Describe Cloud Computing

### Key Concepts

**Definition of Cloud Computing**
- Delivery of computing services over the internet: VMs, storage, databases, networking, IoT, ML, AI.
- Key advantage: no constraint by physical infrastructure; rapid capacity expansion without building datacenters.

**Shared Responsibility Model**
- On-premises: customer responsible for EVERYTHING (physical, OS, apps, data).
- Cloud shifts responsibility based on service model (IaaS → PaaS → SaaS).
- **Always customer-owned** (regardless of service type):
  - Information and data stored in the cloud
  - Devices allowed to connect (phones, computers)
  - Accounts and identities of people, services, and devices
- **Always cloud provider-owned**:
  - Physical datacenter
  - Physical network
  - Physical hosts
- **Varies by service model**: Operating systems, network controls, applications, identity and infrastructure

**IaaS → PaaS → SaaS Responsibility Spectrum**
- IaaS: Customer manages OS, network config, database, apps. Provider manages hardware, power, connectivity.
- PaaS: Provider adds OS and middleware. Customer manages apps and data.
- SaaS: Provider manages nearly everything. Customer manages data, identities, and device access.

### Cloud Models

**Private Cloud**
- Single-entity use; evolved from traditional datacenter.
- Greater control, greater cost, fewer public-cloud benefits.
- Can be on-site, offsite, or managed by a third party.
- Data NOT collocated with other tenants.
- Hardware must be purchased; organization responsible for hardware maintenance.

**Public Cloud**
- Built, controlled, maintained by a third-party provider.
- Anyone can purchase and access resources.
- No capital expenditure to scale; pay only for what you use.
- No complete control over resources/security.

**Hybrid Cloud**
- Interconnected public + private environment.
- Most flexibility: you decide where to run applications.
- You control security, compliance, legal requirements.
- Can surge private cloud demand to public cloud temporarily.

**Multicloud** (fourth model — increasingly common)
- Uses multiple public cloud providers simultaneously.
- Manage resources and security across two or more providers.

**Azure Arc** — helps manage public/private/hybrid/multicloud environments from one control plane.

**Azure VMware Solution** — run existing VMware workloads in Azure with seamless integration.

### Consumption-Based Model (CapEx vs. OpEx)

- **CapEx** = upfront spending on physical infrastructure (servers, datacenter space, hardware).
- **OpEx** = ongoing spending on services over time. Cloud = OpEx.
- Benefits of consumption model:
  - No upfront hardware costs
  - No idle capacity costs
  - Add resources on demand
  - Release resources when demand drops
- Pay-as-you-go pricing: pay only for services consumed.

### Tricky Distinctions

| Concept | Detail |
|---|---|
| Private vs. Hybrid | Private = single entity only; Hybrid = interconnected public + private |
| CapEx vs. OpEx | Physical hardware = CapEx; cloud services = OpEx |
| Shared responsibility | RBAC/policies don't override customer's data responsibility |
| Azure Arc | Used for ANY environment (not just multicloud) — including on-premises |

---

## MODULE 2 — Describe Benefits of Using Cloud Services

### High Availability
- Azure provides SLA-backed uptime guarantees per service.
- High availability = maximum availability regardless of disruptions.
- SLAs expressed as percentages (e.g., 99.9%, 99.99%).

### Scalability
- **Vertical scaling (scale up/down)**: increase/decrease capabilities of a single resource (more CPU, more RAM to a VM). Also called "scaling up."
- **Horizontal scaling (scale out/in)**: add/remove more resource instances (more VMs, more containers). Can be automatic or manual.
- Cloud = consumption-based: pay only for what you use; if demand drops, reduce resources and reduce costs.

### Reliability
- Ability to recover from failures and continue to function.
- One of the pillars of the **Microsoft Azure Well-Architected Framework**.
- Cloud's **decentralized design** supports resiliency: resources deployed in regions worldwide.
- Even if one region has a catastrophic event, other regions remain operational.
- Some cloud environments automatically shift to a different region (no action needed).

### Predictability
Two types:
- **Performance predictability**: predicting resources needed for positive customer experience. Enabled by autoscaling, load balancing, high availability.
- **Cost predictability**: forecasting cloud spend. Enabled by real-time tracking, analytics, Azure Pricing Calculator.

### Security and Governance
- Templates ensure deployed resources meet technical standards and regulatory requirements.
- Cloud-based auditing flags out-of-compliance resources.
- IaaS: maximum control of security (you manage OS, patches).
- PaaS/SaaS: patches and maintenance applied automatically.
- Cloud providers handle DDoS protection.

### Manageability
Two distinct types:
- **Management OF the cloud**: managing cloud resources themselves.
  - Auto-scale deployments
  - Deploy from preconfigured templates
  - Monitor resource health, replace failing resources
  - Automatic alerts based on metrics
- **Management IN the cloud**: how you interact with your environment.
  - Web portal (Azure portal)
  - CLI (Azure CLI)
  - APIs (REST)
  - PowerShell

### Sustainability
- Cloud providers achieve higher resource utilization at scale vs. isolated on-premises.
- Best practices: right-size resources, auto-shutdown dev environments after hours, monitor usage.
- Sustainability closely tied to good operational habits.

### Tricky Distinctions

| Concept | Detail |
|---|---|
| Vertical vs. Horizontal scaling | Vertical = bigger resources; Horizontal = more instances |
| Reliability vs. High Availability | Reliability = recover from failures; HA = maximize uptime |
| Performance vs. Cost Predictability | Performance = right resources at right time; Cost = forecast spend |
| Management OF vs. IN the cloud | OF = what happens to resources; IN = how you interact with them |

---

## MODULE 3 — Describe Cloud Service Types

### IaaS (Infrastructure as a Service)
- Most flexible; maximum customer control.
- Provider responsible for: hardware, network connectivity, physical security.
- Customer responsible for: OS installation/config/maintenance, network config, database/storage config.
- Essentially renting hardware in a cloud datacenter.
- **Scenarios**: lift-and-shift migration, testing and development.

### PaaS (Platform as a Service)
- Middle ground between IaaS and SaaS.
- Provider additionally manages: OS, middleware, development tools, analytics services, database patching/licensing.
- Customer manages: applications, data, access controls.
- No need to worry about OS/database licensing or patching.
- **Scenarios**: development framework (build cloud apps), analytics/business intelligence tools.

### SaaS (Software as a Service)
- Most complete cloud service model; least flexible.
- Provider manages nearly everything including the application itself.
- Customer manages: data, identity and access settings, device access posture.
- Easiest to get up and running; lowest technical expertise required.
- **Scenarios**: email and messaging, productivity apps, finance/expense tracking.

### Shared Responsibility Summary

| Layer | On-Premises | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Physical/network/hosts | Customer | **Provider** | **Provider** | **Provider** |
| Operating System | Customer | Customer | **Provider** | **Provider** |
| Network controls | Customer | Customer | Shared | **Provider** |
| Applications | Customer | Customer | Customer | **Provider** |
| Data/identities | Customer | Customer | Customer | Customer |

### Tricky Distinctions

| Scenario | Right Answer |
|---|---|
| "We need full control of the OS" | IaaS |
| "We want to build apps without managing OS/runtime" | PaaS |
| "We want email with zero infrastructure management" | SaaS |
| "We need to lift-and-shift existing workloads" | IaaS |
| "Provider handles patches automatically" | PaaS or SaaS |
| "Customer always responsible for data" | ALL models |

---

## MODULE 4 — Describe Core Architectural Components of Azure

### Physical Infrastructure

**Datacenters**
- Facilities with servers in racks, dedicated power, cooling, networking.
- Not interacted with directly — accessed through regions/availability zones.

**Regions**
- Geographical area containing at least one (often multiple) nearby datacenters connected by low-latency network.
- Most resources require you to choose a region at deployment.
- Some global services don't require region selection: Microsoft Entra ID, Azure Traffic Manager, Azure DNS.
- Some VM sizes/storage types only available in certain regions.

**Availability Zones**
- Physically separate datacenters within an Azure region.
- Each AZ has independent power, cooling, and networking.
- Act as isolation boundaries — if one zone goes down, others continue.
- Connected by high-speed, private fiber-optic networks.
- **Minimum of three separate AZs in all AZ-enabled regions.**
- Not ALL Azure regions support availability zones.
- Three service categories for AZ support:
  - **Zonal services**: you pin to a specific zone (VMs, managed disks, IP addresses).
  - **Zone-redundant services**: platform replicates automatically across zones (zone-redundant storage, SQL Database).
  - **Non-regional services**: resilient to zone-wide AND region-wide outages (always available).

**Region Pairs**
- Most regions paired with another region in the **same geography**, at least **300 miles** away.
- Enables replication across geography to reduce interruption risk.
- **Paired region advantages**:
  - During Azure outage: one region from every pair prioritized for restoration.
  - Planned updates: rolled out to paired regions one at a time.
  - Data residency: data remains within same geography as its pair (exception: Brazil South).
- Most regions are paired **bidirectionally** (each backs up the other).
- **Brazil South** is an exception: paired in one direction only, paired with South Central US.
- Some regions (Italy North, Poland Central, Israel Central) have no traditional region pair — rely on AZs and geo-redundant storage.
- Examples: West US ↔ East US; Southeast Asia ↔ East Asia.

**Sovereign Regions**
- Isolated from main Azure instance for compliance/legal reasons.
- US Government: US DoD Central, US Gov Virginia, US Gov Arizona — operated by screened U.S. personnel.
- China: China East, China North — operated through partnership with 21Vianet (Microsoft doesn't directly maintain).

### Management Infrastructure

**Resources**
- Basic building block of Azure (VMs, virtual networks, databases, AI services, etc.).
- Anything you create, provision, or deploy.

**Resource Groups**
- Logical groupings of resources.
- Every resource must belong to **exactly one** resource group at a time.
- Resources can be moved between groups.
- Resource groups **cannot be nested**.
- Resource groups **cannot be renamed** after creation.
- Actions on a resource group affect ALL resources inside it.
- Deleting a resource group deletes everything in it.
- Access granted/denied at group level applies to all resources in it.

**Subscriptions**
- Unit of management, billing, and scale.
- Required to use Azure; serves as billing unit.
- Links to an Azure account (identity in Microsoft Entra ID).
- One account can have multiple subscriptions.
- Two types of subscription boundaries:
  - **Billing boundary**: separate invoices per subscription.
  - **Access control boundary**: different access policies per subscription.
- Common reasons to create additional subscriptions: separate environments (dev/test/prod), team/workload boundaries, billing separation.

**Management Groups**
- Sit above subscriptions; organize subscriptions.
- Apply governance (access policies, compliance rules) to a group — all subscriptions inherit.
- Can be nested up to **6 levels deep** (not counting root or subscription level).
- Every Microsoft Entra tenant has a single **Tenant Root Group** at the top.
- **Up to 10,000 management groups** supported in a single directory.
- Each management group and subscription can have **only one parent**.

**Hierarchy** (bottom to top): Resource → Resource Group → Subscription → Management Group → Tenant Root Group

### Azure Account
- Azure free account: popular products free for **12 months** + credit for **first 30 days** + 65+ always-free services.
- Azure free student account: services free for 12 months + **$100 credit** for 12 months + free developer tools + **no credit card required**.

### Tricky Distinctions

| Concept | Detail |
|---|---|
| AZ vs. Region Pair | AZ = same region, different buildings; Region Pair = different regions, 300+ miles apart |
| Zonal vs. Zone-redundant | Zonal = you pin to one zone; Zone-redundant = auto-replicates across zones |
| Resource group nesting | CANNOT be nested (unlike management groups) |
| Management group depth | 6 levels max (excluding root and subscription) |
| Brazil South | Only one-direction paired region; paired to South Central US |

---

## MODULE 5 — Describe Azure Compute and Networking Services

### Azure Virtual Machines (IaaS)
- Virtualized servers; you control OS and installed software.
- Remove need to buy/maintain physical hardware.
- You still manage patching, updates, configuration.
- Deploy quickly from prebuilt images.

**VM Use Cases**: testing/dev, cloud application hosting, datacenter extension, disaster recovery, lift-and-shift migration.

**VM Resources when provisioning**: size (CPU cores, RAM), storage disks (HDD/SSD), networking (VNet, public IP, ports).

**VM Size Families**:
| Family | Focus |
|---|---|
| B-series | Burstable, cost-efficient (dev/test) |
| D-series | General purpose (web servers) |
| E-series | Memory optimized (in-memory databases) |
| F-series | Compute optimized (CPU-intensive) |
| M-series | Large memory (enterprise databases) |
| L-series | Storage optimized (high-throughput) |
| N-series | GPU enabled (AI training, graphics) |

**VM Scale Sets**
- Create and manage groups of **identical, load-balanced VMs**.
- Automatically scale out/in based on demand or schedules.
- Integrates with load balancing for traffic distribution.
- Without scale sets: manual configuration, manual scaling.

**VM Availability Sets** (in-region resiliency within a single datacenter)
- Group VMs to reduce chance all VMs affected by single maintenance or hardware failure.
- Two grouping mechanisms:
  - **Update domain**: VMs that can be rebooted together during planned maintenance.
  - **Fault domain**: VMs that share a potential power or network failure point.
- No additional cost for availability sets (pay for VM instances only).
- In AZ-enabled regions: zone-based designs preferred for broader failure isolation.

### Azure Virtual Desktop
- Desktop and application virtualization service in Azure.
- Securely access Windows desktops and apps from many device types and locations.
- Integrates with Microsoft Entra ID for identity/access.
- Centralizes desktop delivery; reduces data exposure on local devices.
- Supports single-session and multi-session Windows.
- Use when: centralized desktop access needed for distributed users, contractors, hybrid workers.

### Azure Containers
- Run multiple container instances on a single host machine.
- Unlike VMs: you don't manage the OS per container.
- Lightweight, designed to be created/scaled/stopped dynamically.
- Docker is the most popular container engine; Azure supports Docker.

**Azure Container Instances (ACI)**
- Fastest, simplest way to run a container in Azure.
- No VM or additional service management needed.
- **PaaS** offering — upload containers, service runs them.

**Azure Container Apps**
- Similar to ACI but includes built-in **load balancing and scaling**.
- **PaaS** offering; removes container management overhead.

**Azure Kubernetes Service (AKS)**
- Container **orchestration** service.
- Manages lifecycle of containers; simplifies managing a fleet of containers.

**Containers vs. VMs**:
| VMs | Containers |
|---|---|
| One OS per VM | Share host OS |
| Heavier, slower to start | Lightweight, fast start |
| Full OS control | No OS management |
| IaaS | PaaS (ACI, Container Apps) |

**Microservices architecture**: containers split app into independent, separately-scalable pieces.

### Azure Functions (Serverless)
- Event-driven, serverless compute.
- No need to maintain VMs or containers.
- An event "wakes" the function; resources auto-deallocated when function finishes.
- Azure charges only for CPU time used while the function runs.
- Ideal when: code triggered by event (REST request, timer, message), work completes quickly (seconds).
- Scales automatically based on demand.
- **Stateless** by default (restarts on each event).
- **Stateful** = Durable Functions (runtime passes context to track prior activity).
- Can be deployed outside serverless if needs change (VMs, VNets, isolation).

### AI, ML, and IoT/Edge Services

**Azure AI Services**
- Prebuilt capabilities for common AI scenarios: language, speech, vision, document processing.
- Add intelligent features through APIs (no need to train own model first).

**Azure OpenAI Service**
- Generative AI (chat, content generation) with built-in security and governance controls.

**Azure Machine Learning**
- Build, train, and manage **custom** machine learning models.
- Use when model development, experimentation, and lifecycle management is needed.

**Azure IoT Hub**
- Secure, **bi-directional** communication between cloud services and IoT devices.

**Azure IoT Central**
- Simplified **SaaS** IoT platform for solution builders.

**Azure IoT Edge**
- Extends cloud capabilities to **edge devices** — workloads run closer to data generation.

**Decision Pattern**:
- Prebuilt AI via API → Azure AI Services
- Custom model development → Azure Machine Learning
- Connected devices/telemetry → Azure IoT services

### Application Hosting Options

**Azure App Service (PaaS)**
- HTTP-based service for web apps, REST APIs, mobile back-ends.
- No infrastructure management; automatic scaling and high availability.
- Supports Windows and Linux.
- Supports automated deployments from GitHub, Azure DevOps, any Git repo.
- Supports: .NET, .NET Core, Java, PHP, Python, Node.js, Ruby.

**App Service types**:
- **Web apps**: full web hosting
- **API apps**: REST-based web APIs (full Swagger support)
- **WebJobs**: background tasks/scripts running in same context as web app
- **Mobile apps**: build back ends for iOS/Android apps

**Hosting spectrum** (most control → least operational effort): VMs → Containers → App Service

### Tricky Distinctions

| Service | Key Differentiator |
|---|---|
| ACI vs. AKS | ACI = simple, fast, single container; AKS = orchestration for fleets |
| Azure Functions vs. App Service | Functions = event-driven, serverless, pay-per-execution; App Service = always-on hosting |
| VMs vs. Containers | VMs have full OS; Containers share host OS, lighter |
| Azure AI Services vs. Azure ML | AI Services = prebuilt APIs; ML = custom model training |
| IoT Hub vs. IoT Central | IoT Hub = bidirectional device communication; IoT Central = simplified SaaS platform |
| Availability Sets vs. Scale Sets | Availability Sets = resiliency within datacenter; Scale Sets = auto-scaling group |
| Update domain vs. Fault domain | Update domain = planned maintenance; Fault domain = power/network failure isolation |

---

## MODULE 6 — Describe Azure Storage Services

### Storage Accounts

**Standard general-purpose v2** (most common)
- Supports: Blob (incl. Data Lake Gen2), Queue, Table, Azure Files.
- Redundancy: LRS, GRS, RA-GRS, ZRS, GZRS, RA-GZRS.
- Recommended for most scenarios.

**Premium block blobs**
- Supports: Blob (incl. Data Lake Gen2).
- Redundancy: LRS, ZRS only.
- For high transaction rates, small objects, low latency requirements.

**Premium file shares**
- Supports: Azure Files only.
- Redundancy: LRS, ZRS only.
- For high-scale/high-performance file shares; supports both SMB and NFS.

**Premium page blobs**
- Supports: Page blobs only.
- Redundancy: LRS only.

**Storage account naming rules**: 3–24 characters, numbers and lowercase letters only, must be globally unique in Azure.

**Storage service endpoints**:
- Blob: `<account>.blob.core.windows.net`
- Data Lake Gen2: `<account>.dfs.core.windows.net`
- Azure Files: `<account>.file.core.windows.net`
- Queue: `<account>.queue.core.windows.net`
- Table: `<account>.table.core.windows.net`

### Storage Redundancy

**Primary-region options** (data always replicated 3x in primary region):

**LRS (Locally Redundant Storage)**
- 3 copies within a **single datacenter** in primary region.
- Durability: at least **11 nines** (99.999999999%).
- Lowest cost.
- Protects against server rack/drive failures, NOT datacenter-level disaster.

**ZRS (Zone-Redundant Storage)**
- 3 copies synchronously across **3 availability zones** in primary region.
- Durability: at least **12 nines** (99.9999999999%).
- Data available for R/W even if one zone is unavailable.
- Recommended for high availability in-region scenarios.
- Only available in AZ-enabled regions.

**Secondary-region options** (geo-replication):

**GRS (Geo-Redundant Storage)**
- LRS in primary region → asynchronous replication to secondary (also LRS).
- Durability: at least **16 nines** (99.9999999999999999%).
- Secondary data NOT readable unless failover occurs.
- RPO: typically **less than 15 minutes** (no SLA on replication time).

**GZRS (Geo-Zone-Redundant Storage)**
- ZRS in primary → asynchronous replication to secondary (LRS).
- Durability: at least **16 nines** (99.99999999999999%).
- Recommended for maximum consistency, availability, and disaster recovery.
- Secondary not readable unless failover occurs.

**RA-GRS / RA-GZRS (Read-Access)**
- Same as GRS/GZRS, but secondary data is **readable before failover**.
- Important: secondary data may not be up-to-date (RPO applies).

**Summary table**:
| Option | Primary | Secondary | Read Secondary? |
|---|---|---|---|
| LRS | 1 datacenter (3 copies) | None | N/A |
| ZRS | 3 AZs (sync) | None | N/A |
| GRS | 1 datacenter (3 copies) | LRS in paired region | No (unless failover) |
| GZRS | 3 AZs (sync) | LRS in paired region | No (unless failover) |
| RA-GRS | Same as GRS | Same as GRS | **Yes** |
| RA-GZRS | Same as GZRS | Same as GZRS | **Yes** |

### Storage Services

**Azure Blob Storage** — massively scalable unstructured object storage.
- Text/binary data, large uploads, media, logs, analytics.
- Ideal for: serving images to browser, distributed file access, streaming video/audio, backups, analytics.

**Blob Access Tiers**:
| Tier | Min Retention | Access Cost | Storage Cost | Notes |
|---|---|---|---|---|
| Hot | None | Lowest | Highest | Frequently accessed data |
| Cool | **30 days** | Higher | Lower | Infrequently accessed |
| Cold | **90 days** | Higher | Lower | Infrequently accessed |
| Archive | **180 days** | Highest (rehydration latency) | Lowest | Rarely accessed, long-term backups |

- Hot, Cool, Cold: can be set at account OR blob level.
- Archive: can only be set at **blob level** (NOT account level).
- Cool and Cold have lower availability SLAs than Hot.
- Archive has the highest rehydration latency.

**Azure Files** — fully managed file shares accessible via SMB or NFS.
- Can be mounted concurrently by cloud and on-premises deployments.
- SMB: Windows, Linux, macOS.
- NFS: Linux or macOS only.
- SMB shares can be cached on Windows Servers with **Azure File Sync**.

**Azure Queues** — messaging store for asynchronous processing.
- Stores large numbers of messages accessible via HTTP/HTTPS.
- Holds millions of messages; messages up to **64 KB**.
- Often paired with Azure Functions.

**Azure Disks (Managed Disks)** — block-level storage volumes for Azure VMs.

**Azure Tables** — NoSQL store for structured, non-relational data.

### Data Migration Options

**Azure Migrate**
- Online, real-time migration service.
- Hub to manage assessment and migration of on-premises datacenter to Azure.
- Includes: Discovery and assessment, Server Migration, database migration, web app migration.
- Integrates with Azure services, tools, and ISV offerings.

**Azure Data Box**
- Physical (offline) migration service.
- Proprietary physical device shipped to you.
- Maximum usable storage capacity: **80 terabytes**.
- Transported via regional carrier; rugged, secure case.
- Order via Azure portal; tracked end-to-end.
- After import upload: disks wiped per NIST 800-88r1 standards.
- Use cases: one-time bulk migration, periodic large uploads when network too slow, exporting data from Azure.

### File Movement Tools

**AzCopy**
- Command-line utility for copying blobs or files.
- Upload, download, copy between storage accounts, synchronize.
- Can work with other cloud providers.
- Sync is **one-directional** (source to destination only; NOT bidirectional).

**Azure Storage Explorer**
- Standalone graphical (GUI) app for managing files/blobs.
- Works on Windows, macOS, Linux.
- Uses AzCopy on the backend.
- Upload to Azure, download from Azure, move between storage accounts.

**Azure File Sync**
- Centralizes file shares in Azure Files; keeps Windows file server flexibility.
- Bi-directionally synced between on-premises Windows server and Azure Files.
- Supports SMB, NFS, FTPS on local server.
- Supports **cloud tiering**: frequently accessed files cached locally; infrequent files kept in cloud.
- Can have multiple caches worldwide.

### Tricky Distinctions

| Concept | Detail |
|---|---|
| GRS vs. RA-GRS | GRS = secondary not readable; RA-GRS = secondary readable before failover |
| LRS vs. ZRS | LRS = single datacenter; ZRS = three AZs in primary region |
| Azure Migrate vs. Data Box | Migrate = online/real-time; Data Box = offline/physical for large datasets |
| AzCopy vs. File Sync | AzCopy = one-directional copy/sync; File Sync = bidirectional continuous sync |
| Archive tier limitation | Cannot be set at account level, only blob level |
| Cool (30d) vs. Cold (90d) vs. Archive (180d) | Different minimum retention periods |
| Queue message size | 64 KB maximum per message |

---

## MODULE 7 — Describe Azure Identity, Access, and Security

### Microsoft Entra ID (formerly Azure AD)
- Microsoft's cloud-based identity and access management service.
- Used by: IT administrators, app developers, end users, Microsoft 365/Azure subscribers.

**What Entra ID provides**:
- **Authentication**: verify identity; includes self-service password reset, MFA, banned password lists, smart lockout.
- **Single sign-on (SSO)**: one identity accesses multiple applications.
- **Application management**: cloud and on-premises apps via Application Proxy, SaaS integration, My Apps portal.
- **Device management**: device registration via Intune; enables device-based Conditional Access.

**Microsoft Entra Connect**
- Synchronizes user identities between on-premises Active Directory and Microsoft Entra ID.
- Enables consistent SSO, MFA, self-service password reset across on-premises and cloud.

**Microsoft Entra Domain Services**
- Provides managed domain services: **domain join, group policy, LDAP, Kerberos/NTLM authentication**.
- Does NOT require deploying/maintaining domain controllers in the cloud.
- Useful for legacy applications that cannot use modern authentication (lift-and-shift those apps).
- Two Windows Server domain controllers deployed into your selected Azure region (a "replica set").
- You don't manage, configure, or update these DCs — Azure manages them.
- **One-way synchronization**: from Microsoft Entra ID → Domain Services (NOT back).
- Users sign in with existing Entra ID credentials.

### Authentication Methods

**SSO (Single Sign-On)**
- Sign in once, access multiple trusted applications.
- Reduces password sprawl, lowers credential-related incidents.
- Simplifies lifecycle management (one identity to update/remove).
- Security: only as secure as the **initial authenticator**.

**MFA (Multifactor Authentication)**
- Three factor categories:
  - Something you **know** (password, challenge question)
  - Something you **have** (code sent to phone)
  - Something you **are** (biometric: fingerprint, face scan)
- Microsoft Entra MFA: choose additional form during sign-in (phone call, mobile app notification).

**Passwordless Authentication** (highest security + convenience)
Three options in Microsoft Entra ID:
- **Windows Hello for Business**: biometric/PIN tied to designated Windows PC; ideal for information workers with their own PC; PKI integration with SSO.
- **Microsoft Authenticator app**: iOS/Android phone becomes sign-in factor; user receives notification, matches number, confirms with biometric/PIN.
- **FIDO2 security keys**: open standard; unphishable hardware devices (USB, Bluetooth, NFC); no username or password; user registers key then selects at sign-in.

**Security hierarchy** (least to most secure): Password only → MFA → Passwordless.

### External Identities
- External users (partners, suppliers, contractors) use their existing credentials.
- You manage authorization; external identity provider manages authentication.

Three capabilities:
- **B2B Collaboration**: external users sign in with their preferred identity to access your apps; represented as **guest users** in your directory.
- **B2B Direct Connect**: mutual two-way trust with another Entra tenant; currently supports Teams shared channels; external users NOT in your directory.
- **External ID for Customers (Azure AD B2C)**: for consumer-facing apps; identity management in a separate tenant.

### Conditional Access
- Tool that allows/denies access based on identity signals.
- Signals: who the user is, where they are, what device they're using.
- Pipeline: collect signals → make decision → enforce.
- Decision outcomes: Allow, Block, Require MFA.
- Use cases:
  - Require MFA based on user role, location, or network.
  - Allow only approved client applications.
  - Require managed devices.
  - Block access from untrusted sources.

### Azure Role-Based Access Control (RBAC)

**How it works**:
- Define roles with associated permissions.
- Assign individuals/groups to one or more roles.
- Applied to a **scope**: management group, subscription, resource group, or single resource.
- **Hierarchical**: permissions at parent scope inherited by ALL child scopes.
- Uses an **allow model**: multiple role assignments accumulate (read + write = read AND write).
- Enforced through **Azure Resource Manager** on any action against Azure resources.
- Does NOT enforce access at application or data level (handled by application).

**Scope hierarchy** (broadest to narrowest):
1. Management Group
2. Subscription
3. Resource Group
4. Resource

**Built-in roles**: Owner, Contributor, Reader (and many others).

### Zero Trust Model
- Assumes breach at the outset; verifies every request as if from uncontrolled network.
- Three guiding principles:
  1. **Verify explicitly**: always authenticate and authorize based on all available data points.
  2. **Use least privilege access**: JIT/JEA, risk-based adaptive policies, data protection.
  3. **Assume breach**: limit blast radius; segment access; verify end-to-end encryption; use analytics.

Traditional model: perimeter-based (trust if inside the network).
Zero Trust: verify every request regardless of network location.

### Defense-in-Depth
Seven layers (outside in):
1. **Physical security** — protect computing hardware; first line of defense.
2. **Identity and access** — control access to infrastructure; use SSO/MFA; audit events.
3. **Perimeter** — DDoS protection; perimeter firewalls; identify/alert malicious network attacks.
4. **Network** — limit communication between resources; deny by default; restrict inbound internet.
5. **Compute** — secure access to VMs; endpoint protection; keep systems patched.
6. **Application** — ensure apps are secure; store secrets in Azure Key Vault; security as design requirement.
7. **Data** (innermost) — control access to operational and customer data; encryption at rest and in transit.

Each layer slows attacks and provides alert information if breached.

### Encryption and Key Management

**Encryption at rest**: data stored (databases, disks, storage accounts).
**Encryption in transit**: data moving between services, applications, users.

**Azure Key Vault**
- Secure storage for: secrets (connection strings, passwords), encryption keys, certificates.
- Centralizes key/secret management.
- Supports: access control, key rotation, usage auditing.
- Applications use managed identities to retrieve secrets at runtime.
- Primary Azure service for secure key and secret storage.

### Microsoft Defender for Cloud
- Security posture management and threat protection service.
- Monitors cloud, on-premises, hybrid, and multicloud resources.
- Native to Azure; many services monitored without extra deployment.
- Can extend to non-Azure machines via Azure Arc.
- Also protects AWS (EKS clusters, EC2 instances) and GCP.

**Three pillars**:
1. **Continuously Assess**: vulnerability assessment for VMs, container registries, SQL servers. Integrates with Microsoft Defender for Endpoint (Defender Vulnerability Management).
2. **Secure**: policies aligned to environment; builds on Azure Policy; secure score; recommendations aligned to Microsoft Cloud Security Benchmark (MCSB).
3. **Defend**: security alerts with remediation steps; kill-chain analysis; advanced threat protection (VMs, SQL, containers, web apps, networks); just-in-time VM access.

### Tricky Distinctions

| Concept | Detail |
|---|---|
| RBAC vs. Policy vs. Locks | RBAC = who can DO what; Policy = what CAN be deployed/configured; Locks = prevent accidental changes |
| Entra ID vs. Domain Services | Entra ID = modern cloud identity (OAuth, OIDC); Domain Services = legacy protocols (LDAP, Kerberos/NTLM) |
| Conditional Access vs. MFA | Conditional Access uses signals to decide whether MFA is needed; MFA is one enforcement outcome |
| SSO security | Only as secure as the initial authenticator |
| Zero Trust vs. Defense-in-Depth | Zero Trust = security model/philosophy; Defense-in-depth = layered security architecture |
| B2B Collaboration vs. B2B Direct Connect | B2B Collab = guest users in directory; B2B Direct = mutual trust, NOT in directory |

---

## MODULE 8 — Describe Cost Management in Azure

### Factors Affecting Azure Costs

1. **Resource Type**: type, settings, and region all affect price. Different settings = different cost. Same resource in different region = different cost.
2. **Consumption**: pay-as-you-go is default. Can commit for discounts (see below).
3. **Maintenance**: deprovisioned VMs may leave storage/networking running; monitor and clean up.
4. **Geography**: power, labor, taxes, fees vary by location. Network traffic costs vary by region.
5. **Subscription type**: free trial includes products free for 12 months + 30-day credit.
6. **Azure Marketplace**: third-party vendor solutions; vendor sets billing structures; all certified and compliant with Azure policies.

**Network traffic and billing zones**:
- Inbound data transfers into Azure: generally **free**.
- Outbound data transfers (leaving Azure datacenters): priced by billing zone.
- Billing zones = geographical groupings of Azure regions for data-transfer pricing (different from availability zones).

### Pricing Calculator
- Estimates potential Azure expenses before deploying.
- For information purposes only — nothing is provisioned; no charges incurred.
- Estimate individual resources, full solutions, or example scenarios.
- Can account for compute, storage, networking, storage type, access tier, redundancy.

**TCO (Total Cost of Ownership) Calculator — RETIRED August 2025**
- Purpose: compared on-premises costs with projected Azure costs to estimate migration savings.
- Accounted for: hardware, software, electricity, IT staff, and facilities.
- Now retired — use **Azure Migrate's business case assessment** for on-premises-to-Azure cost comparison.
- The concept of TCO comparison (justifying cloud migration with cost analysis) is still testable on AZ-900.

### Microsoft Cost Management Tool
- Checks actual resource costs in real time.
- Creates alerts based on resource spend.
- Creates budgets that can automate management of resources.

**Cost Analysis**: visual explorer of Azure costs by billing cycle, region, resource, etc.

**Cost Alerts** (three types):
- **Budget alerts**: triggered when spending reaches/exceeds a defined threshold. Created in Azure portal or via Azure Consumption API.
- **Credit alerts**: for Enterprise Agreement (EA) organizations; generated at **90% and 100%** of Azure credit balance.
- **Department spending quota alerts**: EA customers only; notify when department spending hits fixed quota threshold (e.g., 50% or 75%).

**Budgets**: set spending limits per subscription, resource group, service type, etc. Can trigger automation (suspend/modify resources) when threshold reached.

### Tags (Resource Metadata)
- Name-value pairs attached to resources.
- Resources do NOT inherit tags from subscriptions and resource groups.
- Tags can be applied at resource, resource group, subscription level (separately — no auto-inheritance).

**Tag use cases**:
- Resource management (locate/act on resources by workload, team, owner)
- Cost management and optimization (cost reporting, cost centers, budgets)
- Operations management (SLA groupings)
- Security (classify data by security level)
- Governance and regulatory compliance
- Workload optimization and automation

**Managing tags**: Azure portal, PowerShell, Azure CLI, ARM templates, REST API.
**Enforcing tags**: use **Azure Policy** to require tags on new resources or reapply removed tags.

### Cost Optimization Options

**Pay-as-you-go**: maximum flexibility; pay for what you use per billing cycle.

**Reservations**
- Commit to specific resources for **1-year or 3-year terms**.
- Best for stable, predictable workloads.
- Applies to: VMs, databases, storage.
- Discount applied to matching usage.

**Azure Savings Plan for Compute**
- Commit to an **hourly spend amount** (not specific resource type) for 1 or 3 years.
- More flexible than Reservations — applies across eligible compute services.
- Azure automatically applies best available price as usage occurs.
- Best when usage is steady but you need flexibility across compute types.

**Spot Virtual Machines**
- Uses unused Azure capacity at reduced prices.
- Azure can **evict** workload when capacity needed back.
- Best for: fault-tolerant, interruptible workloads (batch processing, rendering, test jobs).

**Decision guide**:
- Predictable 24/7 specific resource → Reservations
- Steady compute, varied types → Azure Savings Plan
- Interruptible workload, lowest cost priority → Spot VMs
- Unpredictable workload → Pay-as-you-go

### Tricky Distinctions

| Concept | Detail |
|---|---|
| Pricing Calculator vs. Cost Management | Pricing Calc = estimate BEFORE deployment; Cost Mgmt = track ACTUAL costs after deployment |
| TCO Calculator (retired) vs. Azure Migrate | TCO Calculator was retired Aug 2025; Azure Migrate's business case assessment now provides on-premises-to-Azure cost comparison |
| Reservations vs. Savings Plan | Reservations = specific resource type; Savings Plan = hourly spend commitment, flexible resource |
| Spot VMs | Can be evicted at any time; not for production workloads |
| Credit alerts threshold | 90% and 100% (EA customers only) |
| Tags inheritance | Tags do NOT inherit down the hierarchy automatically |
| Billing zones vs. Availability Zones | Completely different: billing zones = data transfer pricing; AZs = physical resiliency |

---

## MODULE 9 — Describe Features and Tools for Governance and Compliance

### Microsoft Purview
- Family of data governance, risk, and compliance solutions.
- Unified view into data across on-premises, multicloud, and SaaS.

**Two main solution areas**:

**Risk and Compliance**
- Leverages Microsoft 365 services (Teams, OneDrive, Exchange).
- Protect sensitive data across clouds, apps, devices.
- Identify data risks and manage regulatory compliance.

**Unified Data Governance**
- Manage data in Azure, SQL, Hive databases, on-premises, other clouds (including Amazon S3).
- Create data estate maps with classification and end-to-end lineage.
- Identify where sensitive data is stored.
- Manage access to data securely at scale.
- Features: automated data discovery, sensitive data classification, end-to-end data lineage.

### Azure Policy
- Service to create, assign, and manage policies that control or audit resources.
- Evaluate resources, highlight non-compliant resources, prevent non-compliant resource creation.
- Can be set at: specific resource, resource group, subscription, management group.
- Policies are **inherited** (parent policy applies to all children).
- Comes with **built-in** policy and initiative definitions for Storage, Networking, Compute, Security Center, Monitoring.
- Can **automatically remediate** non-compliant resources (e.g., add missing required tags).
- Integrates with Azure DevOps for CI/CD pipeline compliance.

**Azure Policy Initiatives**
- Grouping of related policies.
- Track compliance state for a larger goal.
- Example: "Enable Monitoring in Azure Security Center" initiative contains over 100 separate policy definitions.

**Azure Policy vs. RBAC**:
- RBAC: controls WHO can perform what ACTIONS (focuses on user permissions).
- Policy: controls WHAT can be deployed/configured (focuses on resource configurations and standards).

### Resource Locks
- Prevent accidental deletion or modification of resources.
- Apply regardless of RBAC permissions — even owner must remove lock before blocked activity.
- Can be applied to: individual resources, resource groups, or entire subscriptions.
- Locks are **inherited** (lock on resource group applies to ALL resources inside it).

**Two types**:
- **Delete lock**: authorized users can read and modify, but CANNOT delete.
- **ReadOnly lock**: authorized users can only read; CANNOT delete or update. Equivalent to restricting everyone to the Reader role.

**To modify a locked resource**: must first REMOVE the lock, then make the change.

### Service Trust Portal
- Provides access to Microsoft security, privacy, and compliance practices documentation.
- URL: https://servicetrust.microsoft.com/
- Some resources require sign-in with Microsoft cloud services account + acceptance of NDA.

**Portal features**:
- Service Trust Portal (home page link)
- My Library (save/pin documents, receive update notifications)
- All Documents (single landing place; can pin to My Library)

**Document retention**: available for download for at least **12 months** after publishing.

### Azure Service Lifecycle

Every Azure service progresses through a defined lifecycle before (and after) reaching customers:

**Stages**:
1. **Private Preview** — Available only to invited/selected customers. Early feedback stage; no production SLA or official support. May have significant limitations or missing features.
2. **Public Preview** — Open to ALL Azure customers for evaluation. Can be accessed at preview.portal.azure.com or within the Azure portal (labeled "(Preview)"). Typically **no full production SLA**; not recommended for mission-critical workloads. Purpose: broad feedback before GA.
3. **General Availability (GA)** — Fully released service with complete Microsoft support and an SLA. Recommended for all production workloads.
4. **Retirement** — Service reaches end-of-life. Microsoft gives advance notice (typically 12 months) before retiring a service and provides migration guidance to alternatives.

**Key exam points**:
- Public Preview features may be included on the AZ-900 exam if widely used.
- SLAs apply only to GA services — not to Private or Public Preview.
- Preview features should never be used for customer-facing production workloads without understanding the risk.
- The Azure portal flags preview services clearly so users know they are not GA.

### Tricky Distinctions

| Concept | Detail |
|---|---|
| Azure Policy vs. RBAC | Policy = what can be deployed; RBAC = who can act |
| Policy vs. Locks | Policy = compliance enforcement for new resources; Locks = protect existing resources from changes/deletion |
| Delete lock vs. ReadOnly lock | Delete = can still read/modify; ReadOnly = can only read |
| Locks override RBAC | Even a subscription owner must remove a lock before deleting/modifying |
| Microsoft Purview vs. Azure Policy | Purview = data governance/classification; Policy = Azure resource compliance |
| Service Trust Portal | Compliance documentation — NOT the tool for enforcing policies |
| Public Preview vs. GA | Public Preview = no full SLA, evaluation only; GA = full support and SLA |

---

## MODULE 10 — Describe Features and Tools for Managing and Deploying Azure Resources

### Tools for Interacting with Azure

**Azure Portal**
- Web-based, unified graphical console.
- Build, manage, monitor everything from simple apps to complex deployments.
- Create custom dashboards; configure accessibility options.
- Resilient: presence in every Azure datacenter; no downtime for maintenance.
- Continuously updated.

**Azure Cloud Shell**
- Browser-based shell; no local installation required.
- Authenticated to Azure credentials automatically.
- Supports both **Azure PowerShell** and **Azure CLI** (Bash).
- Accessible from Azure portal via Cloud Shell icon.

**Azure PowerShell**
- Shell for running cmdlets (command-lets) that call the Azure REST API.
- Available on Windows, Linux, Mac + via Cloud Shell.
- Good for: routine setup/teardown/maintenance, deploying entire infrastructures from imperative code.

**Azure CLI**
- Functionally equivalent to Azure PowerShell.
- Primary difference: **syntax** — CLI uses **Bash** commands; PowerShell uses PowerShell cmdlets.
- Available on Windows, Linux, Mac + via Cloud Shell.
- Choice between PowerShell and CLI = mainly which language you prefer.

**Copilot in Azure**
- AI assistant for operational guidance in natural language.
- Helps administrators work faster with contextual suggestions.
- Should validate recommendations and confirm permissions before applying in production.

### Azure Arc
- Extends Azure compliance and monitoring to hybrid and multicloud environments.
- Works with Azure Resource Manager to project non-Azure resources into ARM.
- Provides consistent multicloud and on-premises management platform.

**What Azure Arc can manage outside Azure**:
- Servers
- Kubernetes clusters
- Azure data services
- SQL Server
- Virtual machines (preview)

**Key capability**: apply Azure governance (Policy, RBAC, inventory) consistently across Azure, on-premises, and other clouds.

### Azure Resource Manager (ARM)
- Deployment and management service for Azure.
- All requests from any tool (portal, PowerShell, CLI, SDKs) go through ARM.
- ARM authenticates and authorizes before sending to Azure service.
- Consistent results across all tools because all go through same API.

**ARM benefits**:
- Manage infrastructure through declarative templates (JSON).
- Deploy/manage/monitor resources as a group.
- Re-deploy consistently throughout lifecycle.
- Define dependencies so resources deploy in correct order.
- RBAC is natively integrated.
- Apply tags for cost reporting.

**Infrastructure as Code (IaC)**
- Manage infrastructure through code/templates instead of manual configuration.
- Starts with CLI/PowerShell scripts; grows to ARM templates or Bicep.

**ARM Templates (JSON)**
- Declarative JSON files defining desired Azure resources.
- Azure validates template before deployment.
- Orchestrates resource creation in right order; creates in parallel when possible.
- Can call PowerShell or Bash scripts as part of deployment.
- Benefits: declarative, repeatable, orchestrated, modular, extensible.

**Bicep**
- Declarative language for deploying Azure resources through ARM.
- Simpler and more concise than JSON ARM templates.
- Idempotent: consistent lifecycle deployments.
- Supports current Azure resource types/APIs.
- Modular (Bicep modules).
- Compiles to ARM JSON (ARM still executes it).

**ARM vs. Bicep**:
| Feature | ARM JSON | Bicep |
|---|---|---|
| Syntax | JSON, verbose | Simpler, more readable |
| Underlying engine | ARM | ARM (Bicep compiles to ARM) |
| Both are | Declarative IaC | Declarative IaC |

### Tricky Distinctions

| Concept | Detail |
|---|---|
| Azure PowerShell vs. Azure CLI | Functionally equivalent; difference = syntax (PowerShell vs. Bash) |
| Azure Arc vs. Azure Migrate | Arc = ongoing management/governance of hybrid/multicloud; Migrate = one-time migration assessment |
| ARM vs. Bicep | Bicep compiles to ARM JSON; Bicep = simpler syntax |
| Azure Portal vs. Cloud Shell | Portal = GUI; Cloud Shell = browser-based CLI (PowerShell or Bash) |
| IaC tools | ARM templates, Bicep (declarative); Azure CLI/PowerShell (imperative) |

---

## MODULE 11 — Describe Monitoring Tools in Azure

### Azure Advisor
- Evaluates Azure resources and makes personalized best-practice recommendations.
- Built into the Azure portal.
- Each recommendation: suggested action (take now, postpone, or dismiss).
- Set up notifications for new recommendations.
- Dashboard filters by subscription, resource group, service.

**Five recommendation categories** (mnemonic: RSPOC):
1. **Reliability** — keep applications running; flag configuration risks.
2. **Security** — detect threats and vulnerabilities.
3. **Performance** — speed up applications.
4. **Operational Excellence** — workflow and deployment improvements.
5. **Cost** — reduce Azure spending (e.g., identify idle resources, right-size recommendations).

### Azure Service Health
- Stay informed about health of Azure itself and your specific resources.
- Combines three views:

**Azure Status** (broadest scope)
- Global picture of Azure health across ALL services and ALL regions.
- Check when you hear about a widespread outage.
- Publicly accessible.

**Service Health** (personalized)
- Focuses on the specific Azure services and regions YOU use.
- Requires sign-in; knows which services matter to you.
- Shows: outages, planned maintenance, health advisories relevant to YOUR environment.
- Can set up alerts for automatic notification.
- Retains historical alerts to spot recurring trends.

**Resource Health** (narrowest scope)
- Individual resources (e.g., a specific VM).
- Whether a resource is running normally or experiencing a problem.
- Indicates whether issue is on Azure's side or yours.

**Scope hierarchy**: Azure Status (global) > Service Health (your services/regions) > Resource Health (individual resource).

### Azure Monitor
- Platform for collecting, analyzing, and acting on data from Azure resources and applications.
- Works with Azure, on-premises, and multicloud environments.
- Gathers logs and metrics from applications, OS, network layers.
- Stores data centrally; provides dashboards, queries, and alerts.

**Azure Log Analytics**
- Tool in Azure portal where you write and run **queries** against data Azure Monitor collects.
- Simple filtering (all errors in last hour) to advanced analytics and trend visualization.

**Azure Monitor Alerts**
- Notify when Azure Monitor detects a condition you defined.
- Alert rule: specifies the condition.
- Action group: controls who gets notified and what happens.
- Two types:
  - **Metric alerts**: trigger when a metric threshold is crossed (e.g., VM CPU > 80%).
  - **Log alerts**: watch for specific patterns across resources.
- Action groups are reusable across Azure Monitor, Service Health, and Azure Advisor.

**Application Insights**
- Azure Monitor feature that monitors performance and usage of **web applications**.
- Works in Azure, on-premises, or other clouds.
- Setup: add SDK to application code, or enable Application Insights agent (agentless).
- Monitors:
  - Request rates, response times, failure rates.
  - Dependency calls and their performance.
  - Page load times, user counts, session trends.
  - Server performance counters (CPU, memory, network).
- Can set up **availability tests** (synthetic requests) to confirm app is responding during low traffic.

### Tricky Distinctions

| Concept | Detail |
|---|---|
| Advisor vs. Defender for Cloud | Advisor = broad best-practice recommendations (reliability, cost, performance, etc.); Defender = security posture and threat detection |
| Azure Status vs. Service Health | Status = ALL Azure globally (public); Service Health = YOUR services/regions (personalized, requires sign-in) |
| Service Health vs. Resource Health | Service Health = Azure service-level; Resource Health = individual resource level |
| Azure Monitor vs. Log Analytics | Monitor = full platform (collect, analyze, act); Log Analytics = query interface within Monitor |
| Monitor Alerts vs. Cost Alerts | Monitor Alerts = operational/performance thresholds; Cost Alerts = spending thresholds |
| Application Insights | For application-level monitoring (requests, dependencies, users) — not infrastructure |

---

## CROSS-MODULE SCENARIO TRIGGERS (EXAM-READY)

| Business Need / Scenario | Azure Service / Feature |
|---|---|
| Need maximum control over OS in cloud | IaaS / Azure VM |
| Need to host web app without managing OS/infrastructure | Azure App Service (PaaS) |
| Need scalable event-driven code without servers | Azure Functions |
| Need to run containerized app fleet at scale | Azure Kubernetes Service (AKS) |
| Need to run a quick container with no orchestration | Azure Container Instances (ACI) |
| Need remote desktop access for distributed workforce | Azure Virtual Desktop |
| Need legacy app using LDAP/Kerberos in cloud | Microsoft Entra Domain Services |
| Need to share access with external partner using their own credentials | Microsoft Entra External ID (B2B Collaboration) |
| Need to prevent resource deletion by even admins | Resource Locks (Delete lock) |
| Need to prevent any changes to a production resource | Resource Locks (ReadOnly lock) |
| Need to enforce that VMs can only be deployed in certain regions | Azure Policy |
| Need to track who can create or delete resources | Azure RBAC |
| Need to classify and track sensitive data across clouds | Microsoft Purview |
| Need to read audit reports about Microsoft compliance practices | Service Trust Portal |
| Need to estimate costs before deploying | Azure Pricing Calculator |
| Need to compare on-premises costs with Azure costs | Azure Migrate business case assessment (TCO Calculator retired Aug 2025) |
| Need to track actual costs and set budgets | Microsoft Cost Management |
| Need to migrate large dataset when network bandwidth is limited | Azure Data Box |
| Need to assess and migrate on-premises servers to Azure | Azure Migrate |
| Need to bi-directionally sync on-premises file server with Azure | Azure File Sync |
| Need to copy files to Azure from command line | AzCopy |
| Need to manage Azure resources from a GUI without installing anything | Azure Portal or Azure Cloud Shell |
| Need to manage on-premises and Azure resources under one control plane | Azure Arc |
| Need to deploy identical environments consistently | ARM Templates or Bicep |
| Need to monitor application performance (requests, failures, dependencies) | Application Insights |
| Need to see if a specific VM is experiencing an Azure-side issue | Azure Service Health > Resource Health |
| Need to know about a global Azure outage | Azure Status |
| Need personalized recommendations to reduce costs/improve reliability | Azure Advisor |
| Need security posture score and threat alerts across environments | Microsoft Defender for Cloud |
| Need to commit to stable workload for 3 years to save money | Azure Reservations |
| Need lowest cost for interruptible batch job | Azure Spot Virtual Machines |
| Need to store secrets and encryption keys centrally | Azure Key Vault |
| Need to ensure each AZ failure doesn't affect storage | ZRS (Zone-Redundant Storage) |
| Need to read secondary region storage data without a failover | RA-GRS or RA-GZRS |
| Need to protect data from complete regional failure | GRS, GZRS, RA-GRS, or RA-GZRS |
| Need highest storage durability within single region | ZRS (12 nines) |
| Need to archive data rarely accessed for 2+ years | Archive access tier |
| Need to cache file server files locally while backing up to cloud | Azure File Sync (cloud tiering) |
| Need passwordless hardware authentication device | FIDO2 security key |
| Need to sign in to apps without password, using phone | Microsoft Authenticator app (passwordless) |
| Need to require MFA only when logging in from outside the office | Conditional Access |
| Need to apply policies consistently across multiple subscriptions | Management Groups + Azure Policy |

---

## KEY NUMBERS AND THRESHOLDS TO MEMORIZE

| Item | Value |
|---|---|
| LRS durability | 11 nines (99.999999999%) |
| ZRS durability | 12 nines (99.9999999999%) |
| GRS / GZRS durability | 16 nines |
| Storage RPO (secondary region) | Typically < 15 minutes (no SLA on replication time) |
| Data Box max usable capacity | 80 TB |
| Queue message max size | 64 KB |
| Cool tier minimum retention | 30 days |
| Cold tier minimum retention | 90 days |
| Archive tier minimum retention | 180 days |
| Service Trust Portal doc retention | At least 12 months |
| Region pair minimum distance | 300 miles |
| Minimum AZs per AZ-enabled region | 3 |
| Management group max depth | 6 levels (plus root and subscription) |
| Max management groups per directory | 10,000 |
| Azure free account free products | 12 months |
| Azure free account credit duration | First 30 days |
| Azure free account always-free services | 65+ |
| Azure free student account credit | $100 for 12 months |
| Credit alerts thresholds (EA) | 90% and 100% |
| TCO Calculator retirement date | August 2025 (replaced by Azure Migrate business case) |
| Service lifecycle stages | Private Preview → Public Preview → GA → (Retirement) |
| Brazil South pairing | Paired to South Central US (one-direction only) |
