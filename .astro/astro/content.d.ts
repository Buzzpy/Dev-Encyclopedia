declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		
	};

	type DataEntryMap = {
		"terms": {
"ACID_Transactions": {
	id: "ACID_Transactions";
  collection: "terms";
  data: any
};
"API_Gateway": {
	id: "API_Gateway";
  collection: "terms";
  data: any
};
"API_Versioning": {
	id: "API_Versioning";
  collection: "terms";
  data: any
};
"APIs": {
	id: "APIs";
  collection: "terms";
  data: any
};
"APM_(Application_Performance_Management)": {
	id: "APM_(Application_Performance_Management)";
  collection: "terms";
  data: any
};
"AUC_Curve": {
	id: "AUC_Curve";
  collection: "terms";
  data: any
};
"Agile": {
	id: "Agile";
  collection: "terms";
  data: any
};
"Angular": {
	id: "Angular";
  collection: "terms";
  data: any
};
"Arguments": {
	id: "Arguments";
  collection: "terms";
  data: any
};
"Artificial_Intelligence": {
	id: "Artificial_Intelligence";
  collection: "terms";
  data: any
};
"Asymmetric-cryptography": {
	id: "Asymmetric-cryptography";
  collection: "terms";
  data: any
};
"Authentication": {
	id: "Authentication";
  collection: "terms";
  data: any
};
"Authorization": {
	id: "Authorization";
  collection: "terms";
  data: any
};
"Autoencoders": {
	id: "Autoencoders";
  collection: "terms";
  data: any
};
"Bagging": {
	id: "Bagging";
  collection: "terms";
  data: any
};
"Bash": {
	id: "Bash";
  collection: "terms";
  data: any
};
"Big_O_Notation": {
	id: "Big_O_Notation";
  collection: "terms";
  data: any
};
"Bioinformatics": {
	id: "Bioinformatics";
  collection: "terms";
  data: any
};
"Blockchain": {
	id: "Blockchain";
  collection: "terms";
  data: any
};
"Boolean": {
	id: "Boolean";
  collection: "terms";
  data: any
};
"Boosting": {
	id: "Boosting";
  collection: "terms";
  data: any
};
"Branching": {
	id: "Branching";
  collection: "terms";
  data: any
};
"CQRS_(Command_Query_Responsibility_Segregation)": {
	id: "CQRS_(Command_Query_Responsibility_Segregation)";
  collection: "terms";
  data: any
};
"CSS": {
	id: "CSS";
  collection: "terms";
  data: any
};
"Cache_Invalidation": {
	id: "Cache_Invalidation";
  collection: "terms";
  data: any
};
"Caching": {
	id: "Caching";
  collection: "terms";
  data: any
};
"Chaos_Engineering": {
	id: "Chaos_Engineering";
  collection: "terms";
  data: any
};
"Classes": {
	id: "Classes";
  collection: "terms";
  data: any
};
"Cloud_Computing": {
	id: "Cloud_Computing";
  collection: "terms";
  data: any
};
"Cloud_Orchestration": {
	id: "Cloud_Orchestration";
  collection: "terms";
  data: any
};
"Cloud_Security": {
	id: "Cloud_Security";
  collection: "terms";
  data: any
};
"Cluster_Computing": {
	id: "Cluster_Computing";
  collection: "terms";
  data: any
};
"Code_Review": {
	id: "Code_Review";
  collection: "terms";
  data: any
};
"Code_Smell": {
	id: "Code_Smell";
  collection: "terms";
  data: any
};
"Concurrency": {
	id: "Concurrency";
  collection: "terms";
  data: any
};
"Confusion_Matrix": {
	id: "Confusion_Matrix";
  collection: "terms";
  data: any
};
"Containerization": {
	id: "Containerization";
  collection: "terms";
  data: any
};
"Continuous_Delivery_(CD)": {
	id: "Continuous_Delivery_(CD)";
  collection: "terms";
  data: any
};
"Continuous_Deployment": {
	id: "Continuous_Deployment";
  collection: "terms";
  data: any
};
"Continuous_Integration_(CI)": {
	id: "Continuous_Integration_(CI)";
  collection: "terms";
  data: any
};
"Convolutional_Neural_Networks": {
	id: "Convolutional_Neural_Networks";
  collection: "terms";
  data: any
};
"Cross-Entropy": {
	id: "Cross-Entropy";
  collection: "terms";
  data: any
};
"Cross-Validation": {
	id: "Cross-Validation";
  collection: "terms";
  data: any
};
"Csharp": {
	id: "Csharp";
  collection: "terms";
  data: any
};
"Cybersecurity": {
	id: "Cybersecurity";
  collection: "terms";
  data: any
};
"DRY_Principle": {
	id: "DRY_Principle";
  collection: "terms";
  data: any
};
"Dark_Launch": {
	id: "Dark_Launch";
  collection: "terms";
  data: any
};
"DataOps": {
	id: "DataOps";
  collection: "terms";
  data: any
};
"Data_Anonymization": {
	id: "Data_Anonymization";
  collection: "terms";
  data: any
};
"Data_Deduplication": {
	id: "Data_Deduplication";
  collection: "terms";
  data: any
};
"Data_Governance": {
	id: "Data_Governance";
  collection: "terms";
  data: any
};
"Data_Lake": {
	id: "Data_Lake";
  collection: "terms";
  data: any
};
"Data_Lakehouse": {
	id: "Data_Lakehouse";
  collection: "terms";
  data: any
};
"Data_Lakes_and_Warehouses_Integration": {
	id: "Data_Lakes_and_Warehouses_Integration";
  collection: "terms";
  data: any
};
"Data_Partitioning": {
	id: "Data_Partitioning";
  collection: "terms";
  data: any
};
"Data_Replication": {
	id: "Data_Replication";
  collection: "terms";
  data: any
};
"Data_Science": {
	id: "Data_Science";
  collection: "terms";
  data: any
};
"Data_Serialization": {
	id: "Data_Serialization";
  collection: "terms";
  data: any
};
"Data_Sharding": {
	id: "Data_Sharding";
  collection: "terms";
  data: any
};
"Data_Structure": {
	id: "Data_Structure";
  collection: "terms";
  data: any
};
"Data_Types": {
	id: "Data_Types";
  collection: "terms";
  data: any
};
"Data_Validation": {
	id: "Data_Validation";
  collection: "terms";
  data: any
};
"Data_Warehouse": {
	id: "Data_Warehouse";
  collection: "terms";
  data: any
};
"Database_Indexing": {
	id: "Database_Indexing";
  collection: "terms";
  data: any
};
"Deadlock": {
	id: "Deadlock";
  collection: "terms";
  data: any
};
"Debugger": {
	id: "Debugger";
  collection: "terms";
  data: any
};
"Debugging": {
	id: "Debugging";
  collection: "terms";
  data: any
};
"Decision_Trees": {
	id: "Decision_Trees";
  collection: "terms";
  data: any
};
"Deep_Learning": {
	id: "Deep_Learning";
  collection: "terms";
  data: any
};
"Dependency_Graph": {
	id: "Dependency_Graph";
  collection: "terms";
  data: any
};
"Deployment": {
	id: "Deployment";
  collection: "terms";
  data: any
};
"Deployment_Pipeline": {
	id: "Deployment_Pipeline";
  collection: "terms";
  data: any
};
"Design_Patterns": {
	id: "Design_Patterns";
  collection: "terms";
  data: any
};
"DevOps": {
	id: "DevOps";
  collection: "terms";
  data: any
};
"DevSecOps": {
	id: "DevSecOps";
  collection: "terms";
  data: any
};
"Dictionary": {
	id: "Dictionary";
  collection: "terms";
  data: any
};
"Digital_Twins": {
	id: "Digital_Twins";
  collection: "terms";
  data: any
};
"Distributed_File_System_(DFS)": {
	id: "Distributed_File_System_(DFS)";
  collection: "terms";
  data: any
};
"Distributed_Ledger_Technology": {
	id: "Distributed_Ledger_Technology";
  collection: "terms";
  data: any
};
"Docker": {
	id: "Docker";
  collection: "terms";
  data: any
};
"Docker_Swarm": {
	id: "Docker_Swarm";
  collection: "terms";
  data: any
};
"Domain-Driven_Design": {
	id: "Domain-Driven_Design";
  collection: "terms";
  data: any
};
"Double": {
	id: "Double";
  collection: "terms";
  data: any
};
"ETL_(Extract,_Transform,_Load)": {
	id: "ETL_(Extract,_Transform,_Load)";
  collection: "terms";
  data: any
};
"Edge_AI": {
	id: "Edge_AI";
  collection: "terms";
  data: any
};
"Edge_Computing": {
	id: "Edge_Computing";
  collection: "terms";
  data: any
};
"Edge_Services": {
	id: "Edge_Services";
  collection: "terms";
  data: any
};
"End-to-End_Test": {
	id: "End-to-End_Test";
  collection: "terms";
  data: any
};
"Ensemble_Methods": {
	id: "Ensemble_Methods";
  collection: "terms";
  data: any
};
"Epochs": {
	id: "Epochs";
  collection: "terms";
  data: any
};
"Event-Driven_Architecture": {
	id: "Event-Driven_Architecture";
  collection: "terms";
  data: any
};
"Event_Loop": {
	id: "Event_Loop";
  collection: "terms";
  data: any
};
"Event_Stream_Processing": {
	id: "Event_Stream_Processing";
  collection: "terms";
  data: any
};
"Eventually_Consistent_Systems": {
	id: "Eventually_Consistent_Systems";
  collection: "terms";
  data: any
};
"Explainable_AI_(XAI)": {
	id: "Explainable_AI_(XAI)";
  collection: "terms";
  data: any
};
"F1_Score": {
	id: "F1_Score";
  collection: "terms";
  data: any
};
"Feature_Branching": {
	id: "Feature_Branching";
  collection: "terms";
  data: any
};
"Feature_Engineering": {
	id: "Feature_Engineering";
  collection: "terms";
  data: any
};
"Feature_Scaling": {
	id: "Feature_Scaling";
  collection: "terms";
  data: any
};
"Federated_Learning": {
	id: "Federated_Learning";
  collection: "terms";
  data: any
};
"Floats": {
	id: "Floats";
  collection: "terms";
  data: any
};
"Flutter": {
	id: "Flutter";
  collection: "terms";
  data: any
};
"Fog_Computing": {
	id: "Fog_Computing";
  collection: "terms";
  data: any
};
"Front_End": {
	id: "Front_End";
  collection: "terms";
  data: any
};
"Full_Stack": {
	id: "Full_Stack";
  collection: "terms";
  data: any
};
"Function_as_a_Service_(FaaS)": {
	id: "Function_as_a_Service_(FaaS)";
  collection: "terms";
  data: any
};
"Functions": {
	id: "Functions";
  collection: "terms";
  data: any
};
"GDPR": {
	id: "GDPR";
  collection: "terms";
  data: any
};
"Git": {
	id: "Git";
  collection: "terms";
  data: any
};
"GitHub": {
	id: "GitHub";
  collection: "terms";
  data: any
};
"Gradient_Descent": {
	id: "Gradient_Descent";
  collection: "terms";
  data: any
};
"GraphQL": {
	id: "GraphQL";
  collection: "terms";
  data: any
};
"Graph_Databases": {
	id: "Graph_Databases";
  collection: "terms";
  data: any
};
"HTML": {
	id: "HTML";
  collection: "terms";
  data: any
};
"Homomorphic_Encryption": {
	id: "Homomorphic_Encryption";
  collection: "terms";
  data: any
};
"Horizontal_Scaling": {
	id: "Horizontal_Scaling";
  collection: "terms";
  data: any
};
"Hybrid_Cloud": {
	id: "Hybrid_Cloud";
  collection: "terms";
  data: any
};
"Hyperparameter_Tuning": {
	id: "Hyperparameter_Tuning";
  collection: "terms";
  data: any
};
"IDE": {
	id: "IDE";
  collection: "terms";
  data: any
};
"Immutable_Data_Structures": {
	id: "Immutable_Data_Structures";
  collection: "terms";
  data: any
};
"Immutable_Infrastructure": {
	id: "Immutable_Infrastructure";
  collection: "terms";
  data: any
};
"Infrastructure_as_Code_(IaC)": {
	id: "Infrastructure_as_Code_(IaC)";
  collection: "terms";
  data: any
};
"Inheritance": {
	id: "Inheritance";
  collection: "terms";
  data: any
};
"Integration_Test": {
	id: "Integration_Test";
  collection: "terms";
  data: any
};
"Internet_of_Things": {
	id: "Internet_of_Things";
  collection: "terms";
  data: any
};
"IoT_Edge_Computing": {
	id: "IoT_Edge_Computing";
  collection: "terms";
  data: any
};
"Iteration": {
	id: "Iteration";
  collection: "terms";
  data: any
};
"JWT_(JSON_Web_Tokens)": {
	id: "JWT_(JSON_Web_Tokens)";
  collection: "terms";
  data: any
};
"Java": {
	id: "Java";
  collection: "terms";
  data: any
};
"K-Means_Clustering": {
	id: "K-Means_Clustering";
  collection: "terms";
  data: any
};
"KISS_Principle": {
	id: "KISS_Principle";
  collection: "terms";
  data: any
};
"Kanban": {
	id: "Kanban";
  collection: "terms";
  data: any
};
"Kotlin": {
	id: "Kotlin";
  collection: "terms";
  data: any
};
"Kubernetes": {
	id: "Kubernetes";
  collection: "terms";
  data: any
};
"LLMs": {
	id: "LLMs";
  collection: "terms";
  data: any
};
"List": {
	id: "List";
  collection: "terms";
  data: any
};
"Load_Test": {
	id: "Load_Test";
  collection: "terms";
  data: any
};
"Logistic_Regression": {
	id: "Logistic_Regression";
  collection: "terms";
  data: any
};
"Machine_Learning": {
	id: "Machine_Learning";
  collection: "terms";
  data: any
};
"Machine_Learning_Operations_(MLOps)": {
	id: "Machine_Learning_Operations_(MLOps)";
  collection: "terms";
  data: any
};
"Memory_Leaks": {
	id: "Memory_Leaks";
  collection: "terms";
  data: any
};
"Merging": {
	id: "Merging";
  collection: "terms";
  data: any
};
"Message_Brokers": {
	id: "Message_Brokers";
  collection: "terms";
  data: any
};
"Message_Queues": {
	id: "Message_Queues";
  collection: "terms";
  data: any
};
"Micro-batching": {
	id: "Micro-batching";
  collection: "terms";
  data: any
};
"Microservices": {
	id: "Microservices";
  collection: "terms";
  data: any
};
"Microservices_Architecture": {
	id: "Microservices_Architecture";
  collection: "terms";
  data: any
};
"Mocking": {
	id: "Mocking";
  collection: "terms";
  data: any
};
"Monolith": {
	id: "Monolith";
  collection: "terms";
  data: any
};
"Monolithic_Architecture": {
	id: "Monolithic_Architecture";
  collection: "terms";
  data: any
};
"Multi-Cloud_Strategy": {
	id: "Multi-Cloud_Strategy";
  collection: "terms";
  data: any
};
"Multi-Tenancy": {
	id: "Multi-Tenancy";
  collection: "terms";
  data: any
};
"Namespace": {
	id: "Namespace";
  collection: "terms";
  data: any
};
"Natural_Language_Processing": {
	id: "Natural_Language_Processing";
  collection: "terms";
  data: any
};
"Network_Slicing": {
	id: "Network_Slicing";
  collection: "terms";
  data: any
};
"Neural_Networks": {
	id: "Neural_Networks";
  collection: "terms";
  data: any
};
"NoSQL": {
	id: "NoSQL";
  collection: "terms";
  data: any
};
"NoSQL_Databases": {
	id: "NoSQL_Databases";
  collection: "terms";
  data: any
};
"OAuth_2.0": {
	id: "OAuth_2.0";
  collection: "terms";
  data: any
};
"ORM_(Object-Relational_Mapping)": {
	id: "ORM_(Object-Relational_Mapping)";
  collection: "terms";
  data: any
};
"Objects": {
	id: "Objects";
  collection: "terms";
  data: any
};
"Open_Source": {
	id: "Open_Source";
  collection: "terms";
  data: any
};
"Optimistic_Locking": {
	id: "Optimistic_Locking";
  collection: "terms";
  data: any
};
"Overfitting": {
	id: "Overfitting";
  collection: "terms";
  data: any
};
"Performence_Test": {
	id: "Performence_Test";
  collection: "terms";
  data: any
};
"Precision_and_Recall": {
	id: "Precision_and_Recall";
  collection: "terms";
  data: any
};
"Prototypes_(Software_Development)": {
	id: "Prototypes_(Software_Development)";
  collection: "terms";
  data: any
};
"Pull_Requests_(PR)": {
	id: "Pull_Requests_(PR)";
  collection: "terms";
  data: any
};
"Quantum_Computing": {
	id: "Quantum_Computing";
  collection: "terms";
  data: any
};
"Quantum_Cryptography": {
	id: "Quantum_Cryptography";
  collection: "terms";
  data: any
};
"RESTful_API": {
	id: "RESTful_API";
  collection: "terms";
  data: any
};
"ROC_Curve": {
	id: "ROC_Curve";
  collection: "terms";
  data: any
};
"Random_Forest": {
	id: "Random_Forest";
  collection: "terms";
  data: any
};
"Rate_Limiting": {
	id: "Rate_Limiting";
  collection: "terms";
  data: any
};
"ReactJS": {
	id: "ReactJS";
  collection: "terms";
  data: any
};
"Reactive_Programming": {
	id: "Reactive_Programming";
  collection: "terms";
  data: any
};
"Recurrent_Neural_Networks": {
	id: "Recurrent_Neural_Networks";
  collection: "terms";
  data: any
};
"Recursion": {
	id: "Recursion";
  collection: "terms";
  data: any
};
"Recursion_Depth": {
	id: "Recursion_Depth";
  collection: "terms";
  data: any
};
"Refactoring": {
	id: "Refactoring";
  collection: "terms";
  data: any
};
"Regularization": {
	id: "Regularization";
  collection: "terms";
  data: any
};
"Reinforcement_Learning": {
	id: "Reinforcement_Learning";
  collection: "terms";
  data: any
};
"Ruby": {
	id: "Ruby";
  collection: "terms";
  data: any
};
"Ruby_on_Rails": {
	id: "Ruby_on_Rails";
  collection: "terms";
  data: any
};
"SOLID_Principles": {
	id: "SOLID_Principles";
  collection: "terms";
  data: any
};
"SQL": {
	id: "SQL";
  collection: "terms";
  data: any
};
"Scalability": {
	id: "Scalability";
  collection: "terms";
  data: any
};
"Scrum": {
	id: "Scrum";
  collection: "terms";
  data: any
};
"Security_Test": {
	id: "Security_Test";
  collection: "terms";
  data: any
};
"Server_Sent_Events_(SSE)": {
	id: "Server_Sent_Events_(SSE)";
  collection: "terms";
  data: any
};
"Serverless_Architecture": {
	id: "Serverless_Architecture";
  collection: "terms";
  data: any
};
"Serverless_Computing": {
	id: "Serverless_Computing";
  collection: "terms";
  data: any
};
"Serverless_Functions": {
	id: "Serverless_Functions";
  collection: "terms";
  data: any
};
"Service_Discovery": {
	id: "Service_Discovery";
  collection: "terms";
  data: any
};
"Software_Containers": {
	id: "Software_Containers";
  collection: "terms";
  data: any
};
"Stateful_Widget": {
	id: "Stateful_Widget";
  collection: "terms";
  data: any
};
"Stateful_vs_Stateless_Systems": {
	id: "Stateful_vs_Stateless_Systems";
  collection: "terms";
  data: any
};
"Stress_Test": {
	id: "Stress_Test";
  collection: "terms";
  data: any
};
"String": {
	id: "String";
  collection: "terms";
  data: any
};
"Support_Vector_Machines": {
	id: "Support_Vector_Machines";
  collection: "terms";
  data: any
};
"Swift": {
	id: "Swift";
  collection: "terms";
  data: any
};
"SwiftUI": {
	id: "SwiftUI";
  collection: "terms";
  data: any
};
"Syntax": {
	id: "Syntax";
  collection: "terms";
  data: any
};
"Synthetic_Data": {
	id: "Synthetic_Data";
  collection: "terms";
  data: any
};
"Technical_Debt": {
	id: "Technical_Debt";
  collection: "terms";
  data: any
};
"Test-Driven_Development": {
	id: "Test-Driven_Development";
  collection: "terms";
  data: any
};
"Testing": {
	id: "Testing";
  collection: "terms";
  data: any
};
"The___init___Function": {
	id: "The___init___Function";
  collection: "terms";
  data: any
};
"Threads": {
	id: "Threads";
  collection: "terms";
  data: any
};
"Three-Sigma_Rule": {
	id: "Three-Sigma_Rule";
  collection: "terms";
  data: any
};
"Throttling": {
	id: "Throttling";
  collection: "terms";
  data: any
};
"Tokenization": {
	id: "Tokenization";
  collection: "terms";
  data: any
};
"Transfer_Learning": {
	id: "Transfer_Learning";
  collection: "terms";
  data: any
};
"Tuple": {
	id: "Tuple";
  collection: "terms";
  data: any
};
"Typescript": {
	id: "Typescript";
  collection: "terms";
  data: any
};
"Underfitting": {
	id: "Underfitting";
  collection: "terms";
  data: any
};
"Unit_test": {
	id: "Unit_test";
  collection: "terms";
  data: any
};
"Usability_Test": {
	id: "Usability_Test";
  collection: "terms";
  data: any
};
"User-Acceptance_Test_(UAT)": {
	id: "User-Acceptance_Test_(UAT)";
  collection: "terms";
  data: any
};
"Version_Control": {
	id: "Version_Control";
  collection: "terms";
  data: any
};
"Vertical_Scaling": {
	id: "Vertical_Scaling";
  collection: "terms";
  data: any
};
"Virtual_Private_Cloud_(VPC)": {
	id: "Virtual_Private_Cloud_(VPC)";
  collection: "terms";
  data: any
};
"VueJS": {
	id: "VueJS";
  collection: "terms";
  data: any
};
"WebAssembly_(Wasm)": {
	id: "WebAssembly_(Wasm)";
  collection: "terms";
  data: any
};
"WebRTC_(Web_Real-Time_Communication)": {
	id: "WebRTC_(Web_Real-Time_Communication)";
  collection: "terms";
  data: any
};
"Web_Flow": {
	id: "Web_Flow";
  collection: "terms";
  data: any
};
"Web_Hooks": {
	id: "Web_Hooks";
  collection: "terms";
  data: any
};
"Web_Scraping": {
	id: "Web_Scraping";
  collection: "terms";
  data: any
};
"Zero_Downtime_Deployment": {
	id: "Zero_Downtime_Deployment";
  collection: "terms";
  data: any
};
"Zero_Trust_Security_Model": {
	id: "Zero_Trust_Security_Model";
  collection: "terms";
  data: any
};
"gRPC": {
	id: "gRPC";
  collection: "terms";
  data: any
};
"symmetric-cryptography": {
	id: "symmetric-cryptography";
  collection: "terms";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
