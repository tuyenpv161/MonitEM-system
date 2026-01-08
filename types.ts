export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface CaseStudy {
  country: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface ProbeSpec {
  model: string;
  range: string;
  type: string;
}