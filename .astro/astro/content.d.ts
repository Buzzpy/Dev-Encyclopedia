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
		"terms": {
"GDPR.md": {
	id: "GDPR.md";
  slug: "gdpr";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"angular.md": {
	id: "angular.md";
  slug: "angular";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"apis.md": {
	id: "apis.md";
  slug: "apis";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"arguments.md": {
	id: "arguments.md";
  slug: "arguments";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"authentication.md": {
	id: "authentication.md";
  slug: "authentication";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"authorization.md": {
	id: "authorization.md";
  slug: "authorization";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"babel.md": {
	id: "babel.md";
  slug: "babel";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"blockchain.md": {
	id: "blockchain.md";
  slug: "blockchain";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"boolean.md": {
	id: "boolean.md";
  slug: "boolean";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"cacheInvalidation.md": {
	id: "cacheInvalidation.md";
  slug: "cacheinvalidation";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"caching.md": {
	id: "caching.md";
  slug: "caching";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"ciCd.md": {
	id: "ciCd.md";
  slug: "cicd";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"classes.md": {
	id: "classes.md";
  slug: "classes";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"cloudComputing.md": {
	id: "cloudComputing.md";
  slug: "cloudcomputing";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"code-smell.md": {
	id: "code-smell.md";
  slug: "code-smell";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"codeReview.md": {
	id: "codeReview.md";
  slug: "codereview";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"continuousDeployment.md": {
	id: "continuousDeployment.md";
  slug: "continuousdeployment";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"cypress.md": {
	id: "cypress.md";
  slug: "cypress";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"darkLaunch.md": {
	id: "darkLaunch.md";
  slug: "darklaunch";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"dataDeduplication.md": {
	id: "dataDeduplication.md";
  slug: "datadeduplication";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"dataLakesAndWarehousesIntegration.md": {
	id: "dataLakesAndWarehousesIntegration.md";
  slug: "datalakesandwarehousesintegration";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"dataPartitioning.md": {
	id: "dataPartitioning.md";
  slug: "datapartitioning";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"dataScience.md": {
	id: "dataScience.md";
  slug: "datascience";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"dataSerialization.md": {
	id: "dataSerialization.md";
  slug: "dataserialization";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"dataTypes.md": {
	id: "dataTypes.md";
  slug: "datatypes";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"dataValidation.md": {
	id: "dataValidation.md";
  slug: "datavalidation";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"deadlock.md": {
	id: "deadlock.md";
  slug: "deadlock";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"debugger.md": {
	id: "debugger.md";
  slug: "debugger";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"deepLearning.md": {
	id: "deepLearning.md";
  slug: "deeplearning";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"deployment.md": {
	id: "deployment.md";
  slug: "deployment";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"deploymentPipeline.md": {
	id: "deploymentPipeline.md";
  slug: "deploymentpipeline";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"dictionary.md": {
	id: "dictionary.md";
  slug: "dictionary";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"docker.md": {
	id: "docker.md";
  slug: "docker";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"domainDrivenDesign.md": {
	id: "domainDrivenDesign.md";
  slug: "domaindrivendesign";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"double.md": {
	id: "double.md";
  slug: "double";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"epochs.md": {
	id: "epochs.md";
  slug: "epochs";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"eventDrivenArchitecture.md": {
	id: "eventDrivenArchitecture.md";
  slug: "eventdrivenarchitecture";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"eventStreamProcessing.md": {
	id: "eventStreamProcessing.md";
  slug: "eventstreamprocessing";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"featureBranching.md": {
	id: "featureBranching.md";
  slug: "featurebranching";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"floats.md": {
	id: "floats.md";
  slug: "floats";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"frontEnd.md": {
	id: "frontEnd.md";
  slug: "frontend";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"fullStack.md": {
	id: "fullStack.md";
  slug: "fullstack";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"functions.md": {
	id: "functions.md";
  slug: "functions";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"gatsby.md": {
	id: "gatsby.md";
  slug: "gatsby";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"git.md": {
	id: "git.md";
  slug: "git";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"github.md": {
	id: "github.md";
  slug: "github";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"graphql.md": {
	id: "graphql.md";
  slug: "graphql";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"http2.md": {
	id: "http2.md";
  slug: "http2";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"iaas.md": {
	id: "iaas.md";
  slug: "iaas";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"ide.md": {
	id: "ide.md";
  slug: "ide";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"immutableDataStructures.md": {
	id: "immutableDataStructures.md";
  slug: "immutabledatastructures";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"inheritance.md": {
	id: "inheritance.md";
  slug: "inheritance";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"initFunction.md": {
	id: "initFunction.md";
  slug: "initfunction";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"internetOfThings.md": {
	id: "internetOfThings.md";
  slug: "internetofthings";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"jest.md": {
	id: "jest.md";
  slug: "jest";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"jsx.md": {
	id: "jsx.md";
  slug: "jsx";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"kubernetes.md": {
	id: "kubernetes.md";
  slug: "kubernetes";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"list.md": {
	id: "list.md";
  slug: "list";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"llms.md": {
	id: "llms.md";
  slug: "llms";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"machineLearning.md": {
	id: "machineLearning.md";
  slug: "machinelearning";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"messageBrokers.md": {
	id: "messageBrokers.md";
  slug: "messagebrokers";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"microBatching.md": {
	id: "microBatching.md";
  slug: "microbatching";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"microservices.md": {
	id: "microservices.md";
  slug: "microservices";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"mocha.md": {
	id: "mocha.md";
  slug: "mocha";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"mocking.md": {
	id: "mocking.md";
  slug: "mocking";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"monolithicArchitecture.md": {
	id: "monolithicArchitecture.md";
  slug: "monolithicarchitecture";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"networkSlicing.md": {
	id: "networkSlicing.md";
  slug: "networkslicing";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"neuralNetworks.md": {
	id: "neuralNetworks.md";
  slug: "neuralnetworks";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"nextJs.md": {
	id: "nextJs.md";
  slug: "nextjs";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"npm.md": {
	id: "npm.md";
  slug: "npm";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"objects.md": {
	id: "objects.md";
  slug: "objects";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"openSource.md": {
	id: "openSource.md";
  slug: "opensource";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"optimitc-locking.md": {
	id: "optimitc-locking.md";
  slug: "optimitc-locking";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"orm.md": {
	id: "orm.md";
  slug: "orm";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"paas.md": {
	id: "paas.md";
  slug: "paas";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"prototypes.md": {
	id: "prototypes.md";
  slug: "prototypes";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"python.md": {
	id: "python.md";
  slug: "python";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"quantumComputing.md": {
	id: "quantumComputing.md";
  slug: "quantumcomputing";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"react.md": {
	id: "react.md";
  slug: "react";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"redux.md": {
	id: "redux.md";
  slug: "redux";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"refactoring.md": {
	id: "refactoring.md";
  slug: "refactoring";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"restApi.md": {
	id: "restApi.md";
  slug: "restapi";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"saas.md": {
	id: "saas.md";
  slug: "saas";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"scalability.md": {
	id: "scalability.md";
  slug: "scalability";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"securityTest.md": {
	id: "securityTest.md";
  slug: "securitytest";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"serverless-computing.md": {
	id: "serverless-computing.md";
  slug: "serverless-computing";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"statefulVsStatelessSystems.md": {
	id: "statefulVsStatelessSystems.md";
  slug: "statefulvsstatelesssystems";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"storybook.md": {
	id: "storybook.md";
  slug: "storybook";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"stressTest.md": {
	id: "stressTest.md";
  slug: "stresstest";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"string.md": {
	id: "string.md";
  slug: "string";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"svelte.md": {
	id: "svelte.md";
  slug: "svelte";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"syntax.md": {
	id: "syntax.md";
  slug: "syntax";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"threads.md": {
	id: "threads.md";
  slug: "threads";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"tuple.md": {
	id: "tuple.md";
  slug: "tuple";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"typescript.md": {
	id: "typescript.md";
  slug: "typescript";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"usabilityTest.md": {
	id: "usabilityTest.md";
  slug: "usabilitytest";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"vue.md": {
	id: "vue.md";
  slug: "vue";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"webAssembly.md": {
	id: "webAssembly.md";
  slug: "webassembly";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"webFlow.md": {
	id: "webFlow.md";
  slug: "webflow";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"webHooks.md": {
	id: "webHooks.md";
  slug: "webhooks";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"webScraping.md": {
	id: "webScraping.md";
  slug: "webscraping";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"webSockets.md": {
	id: "webSockets.md";
  slug: "websockets";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"webpack.md": {
	id: "webpack.md";
  slug: "webpack";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"yarn.md": {
	id: "yarn.md";
  slug: "yarn";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
"zeroDowntimeDeployment.md": {
	id: "zeroDowntimeDeployment.md";
  slug: "zerodowntimedeployment";
  body: string;
  collection: "terms";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
