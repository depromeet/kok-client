export interface NaverReverseGeocodeResponse {
  status: {
    code: number;
    name: string;
    message: string;
  };
  results: Array<{
    region: {
      area0: { name: string };
      area1: { name: string };
      area2: { name: string };
      area3: { name: string };
      area4: { name: string };
    };
    land: {
      type: string;
      number1: string;
      number2: string;
      name: string;
    };
  }>;
}
