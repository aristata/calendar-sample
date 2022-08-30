/**
 * Open API 를 통해 공휴일 정보를 받아온다
 */
interface HolidaysResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: [
        item: {
          dateKind: string;
          dateName: string;
          isHoliday: string;
          locdate: string;
          seq: number;
        }
      ];
    };
  };
}

export default async function handler(req, res) {
  const { year, month } = req.query;

  // console.log(year, month);

  // 파라미터
  // solYear: 연도, 4자리, 필수값, 예: 2022
  // solMonth: 월, 2자리, 옵션값, 예: 08
  // ServiceKey: 서비스키, 필수값
  // _type: json, 옵션값, 기본값: xml
  // numOfRows: 한페이지 결과 수, 옵션값, 기본값 10
  const paramString = `solYear=${year}&solMonth=${month}&ServiceKey=${process.env.OPEN_API_KEY}&_type=json`;

  const result: HolidaysResponse = await (
    await fetch(
      `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?${paramString}`
    )
  ).json();

  res.status(200).json(result.response.body.items);
}
