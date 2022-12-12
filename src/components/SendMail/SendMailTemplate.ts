const myHtmlSign = `
  <p style='font-weight:bold;margin-top:16px;'>
    <span style='display:brock;'>キトアンドエムズデザイン</span><br />
    <span style='display:brock;'>kit.and.ms@gmail.com</span><br />
    <span style='display:brock;'>北原</span>
  </p>
`

const myTextSign = `
  キトアンドエムズデザイン
  kit.and.ms@gmail.com
  北原
`

export const toGuest = (content: any , type: string) => {
  let result: any = ''
  if(type === 'html') {
    result = `
      <div style='padding:24px;background-color:#ffe9e9;'>
      <h4>${content.name} 様</h4>
      <strong>お問い合わせありがとうございます。
      <br />以下のご内容を承りました。</strong>
      <table>
      <tbody>
      <tr><td></td></tr>
      <tr>
      <td>お名前</td>
      <td>${content.name}</td>
      </tr>
      <tr>
      <td>ご連絡先</td>
      <td>${content.mail}</td>
      </tr>
      <tr>
      <td>地域</td>
      <td>${content.subject}</td>
      </tr>
      <tr>
      <td>ご用件</td>
      <td>${content.message}</td>
      </tr>
      </tbody>
      </table>
      <p>頂いたご内容をもとに追ってご連絡致します。
      <br />今しばらくお待ちください。</p>
      ${myHtmlSign}
      </div>
    `
  } else {
    result = `${content.name}様
    お問合せありがとうございます。

    以下のご内容を承りました。

    お名前：${content.name}

    ご連絡先：${content.mail}

    地域：${content.subject}

    ご用件：${content.message}

    頂いたご内容をもとに追ってご連絡致します。
    今しばらくお待ちください。

    ${myTextSign}
    `
  }
  return result
}

export const toMe = (content: any, type: string) => {
  let result: any = ''
  if(type === 'html') {
    result = `
    <>
      <p>${content.name}様からのお問合せです。</p>
      <table>
      <tbody>
      <tr><td></td></tr>
      <tr>
      <td>お名前</td>
      <td>${content.name}</td>
      </tr>
      <tr>
      <td>ご連絡先</td>
      <td>${content.mail}</td>
      </tr>
      <tr>
      <td>地域</td>
      <td>${content.subject}</td>
      </tr>
      <tr>
      <td>ご用件</td>
      <td>${content.message}</td>
      </tr>
      </tbody>
      </table>
    `
  } else {
    result = `
    ${content.name}様からのお問合せ

    お名前：${content.name}

    ご連絡先：${content.mail}

    地域：${content.subject}

    ご用件：${content.message}

    `
  }
  return result
}