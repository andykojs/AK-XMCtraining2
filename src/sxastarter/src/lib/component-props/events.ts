/**
 * Shared base content fields
 */
export type BaseContentFields = {
  fields: {
    Title: Field<string>;
    Intro: TextField;
    Content: RichTextField;
    ContentImage: ImageField;
    NavigationImage: ImageField;
  };
};

/**
 * Shared root data returned from Layout Service
 */
export type EventRouteData = RouteData & BaseContentFields;
