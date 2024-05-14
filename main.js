const myHeaders = new Headers();
myHeaders.append("content-type", "application/json");
myHeaders.append(
  "cookie",
  "_hjSessionUser_868286=eyJpZCI6IjQxYmU2Y2JkLTZkY2QtNTBkYy05MGY2LWUyYWVhNWQwNzRhZCIsImNyZWF0ZWQiOjE3MDk0Mzg1MTk2MDMsImV4aXN0aW5nIjp0cnVlfQ==;_ga_VYF4T4BCNH=GS1.1.1712059981.1.0.1712059981.0.0.0;SPC_T_ID=PUdGWDBETKvaHiNg4byMIbgg/UDhk8VrUPU0pW3c7pVMlJ3VcWy1ASkCFbLxl5UUpwTIfLMIp87+FmhW5Foc8ibstPGsLex4moxm7u3lx7ukcRRn61keTQ6a5zdXqoP99kaPxmmUwnM/xy21qcHsuMU0KHt8WNO4ElnqFZJ8Sfs=;SPC_F=7RNzS2SmK2eQNpfMp32kxAT6SqRrkgL2;SPC_R_T_ID=PUdGWDBETKvaHiNg4byMIbgg/UDhk8VrUPU0pW3c7pVMlJ3VcWy1ASkCFbLxl5UUpwTIfLMIp87+FmhW5Foc8ibstPGsLex4moxm7u3lx7ukcRRn61keTQ6a5zdXqoP99kaPxmmUwnM/xy21qcHsuMU0KHt8WNO4ElnqFZJ8Sfs=;AMP_TOKEN=%24NOT_FOUND;SPC_SI=CVPUZQAAAABPd29MYWRQMQdJYgIAAAAARlZhUzQ5N0Y=;SC_SSO_U=-;pb_fallback=;SPC_CDS_CHAT=7a5bf474-8def-4b02-9e7b-f69d594fa7c4;SPC_EC=.eFdoRVdwWkFQanlrbllyRVuzabP3c1IEkRprqAQICdvxn0ihF0FlKWchQhkFDmHE21elcW97ZuGmFEklqqAztUrhDkBGWePu1DOkJhZTH7RfCHEdlIau0X5jTEdx4YrxmY750lya2vlIrelYHmPEVp5gZN1z40YYdcgiUh2ip/xMA7fl/6Vm2SFUxoSEXrFIsYlMl+cj5DBI/jIvysz9pA==;_ga_FV78QC1144=GS1.1.1712723291.2.1.1712723464.60.0.0;_ga_3XVGTY3603=GS1.1.1711965432.2.1.1711967425.60.0.0;_fbp=fb.1.1709403914466.795002366;ds=f5d6623fb46b0b91d80c145c1bc9365d;language=vi;_ga=GA1.2.1106955899.1709403915;_ga_QLZF8ZGF0S=GS1.1.1710430409.1.0.1710430410.0.0.0;__LOCALE__null=VN;_fbc=fb.1.1710049218358.IwAR2rWh96olyJ8r_y7bt-ly2pQ1pPxdyTEMxiHjoKb1PjsT3aftJHOPY6ofY;_ga_2GGCCMMNQL=GS1.1.1712855115.2.1.1712855896.0.0.0;_ga_4GPP1ZXG63=GS1.1.1714024158.17.1.1714026220.55.0.0;_ga_TEVYGNDY1K=GS1.1.1713437321.19.0.1713437321.60.0.0;_gcl_au=1.1.1033295142.1709403914;_gid=GA1.2.1946589845.1713065600;_med=affiliates;_QPWSDCXHZQA=398940bb-4a19-41e1-ec66-5272e8ed0026;_sapid=09aa477ac7a2ca1f4304779cacb3e9c53811011eac45f464ee78630b;csrftoken=xM5Y1bhx4bZOmMIEwTjoYx30hdnvsHoK;REC7iLP4Q=ccf46d04-9f14-4fed-92c8-d74ac6450335;REC_T_ID=37378d79-d8c2-11ee-b1bb-fab1f9ed2329;SC_DFP=GbsRkWPiCCDIAlwPjWNeTbwmKjUOunzI;SC_SSO=-;shopee_webUnique_ccd=00lvG9GY529maaEIBRlCCA%3D%3D%7Cku3HHoLiLIbRRvbyfLZI6IPUOk0zLSVNK6k0DTJPb7%2BxovGTVMeAjY4e1s2OHjG7GUcfzYtJJ7nJxA%3D%3D%7CsGwojiPE48suSA8C%7C08%7C3;SPC_CLIENTID=N1JOelMyU21LMmVRyfdnzrpbvecbiizb;SPC_IA=1;SPC_LIUP_177993892=;SPC_R_T_IV=M2l1S0R2Y0Q3eWlCelRCcw==;SPC_SC_OFFLINE_TOKEN=;SPC_SC_SA_TK=;SPC_SC_SA_UD=;SPC_SEC_SI=v1-NTFoZEpyUDJQa1ROaEZuNzLZi2GZd/rqXIp1srnuikqrR+tagUOSdYovjfW76dT+BD85+xEMd9qGpJugr4UIWJlKwEMi6UBwXT9IR/d/lgo=;SPC_ST=.eFdoRVdwWkFQanlrbllyRVuzabP3c1IEkRprqAQICdvxn0ihF0FlKWchQhkFDmHE21elcW97ZuGmFEklqqAztUrhDkBGWePu1DOkJhZTH7RfCHEdlIau0X5jTEdx4YrxmY750lya2vlIrelYHmPEVp5gZN1z40YYdcgiUh2ip/xMA7fl/6Vm2SFUxoSEXrFIsYlMl+cj5DBI/jIvysz9pA==;SPC_T_IV=M2l1S0R2Y0Q3eWlCelRCcw==;SPC_U=177993892; SPC_EC=.eFdoRVdwWkFQanlrbllyRVuzabP3c1IEkRprqAQICdvxn0ihF0FlKWchQhkFDmHE21elcW97ZuGmFEklqqAztUrhDkBGWePu1DOkJhZTH7RfCHEdlIau0X5jTEdx4YrxmY750lya2vlIrelYHmPEVp5gZN1z40YYdcgiUh2ip/xMA7fl/6Vm2SFUxoSEXrFIsYlMl+cj5DBI/jIvysz9pA==; SPC_R_T_ID=PUdGWDBETKvaHiNg4byMIbgg/UDhk8VrUPU0pW3c7pVMlJ3VcWy1ASkCFbLxl5UUpwTIfLMIp87+FmhW5Foc8ibstPGsLex4moxm7u3lx7ukcRRn61keTQ6a5zdXqoP99kaPxmmUwnM/xy21qcHsuMU0KHt8WNO4ElnqFZJ8Sfs=; SPC_R_T_IV=M2l1S0R2Y0Q3eWlCelRCcw==; SPC_SI=CVPUZQAAAABPd29MYWRQMQdJYgIAAAAARlZhUzQ5N0Y=; SPC_ST=.eFdoRVdwWkFQanlrbllyRVuzabP3c1IEkRprqAQICdvxn0ihF0FlKWchQhkFDmHE21elcW97ZuGmFEklqqAztUrhDkBGWePu1DOkJhZTH7RfCHEdlIau0X5jTEdx4YrxmY750lya2vlIrelYHmPEVp5gZN1z40YYdcgiUh2ip/xMA7fl/6Vm2SFUxoSEXrFIsYlMl+cj5DBI/jIvysz9pA==; SPC_T_ID=PUdGWDBETKvaHiNg4byMIbgg/UDhk8VrUPU0pW3c7pVMlJ3VcWy1ASkCFbLxl5UUpwTIfLMIp87+FmhW5Foc8ibstPGsLex4moxm7u3lx7ukcRRn61keTQ6a5zdXqoP99kaPxmmUwnM/xy21qcHsuMU0KHt8WNO4ElnqFZJ8Sfs=; SPC_T_IV=M2l1S0R2Y0Q3eWlCelRCcw==; SPC_U=177993892"
);
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append(
  "user-agent",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0"
);

const raw = JSON.stringify({
  exclude_user_voucher_list_type: [9],
  voucher_status: 1,
  voucher_sort_flag: 6,
  cursor: "",
  limit: 50,
  addition: ["voucher_microsite_link"],
  version: 7,
  priority_voucher_list: null,
  need_statistics: true,
  show_red_dot: false,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(
  "https://shopee.vn/api/v2/voucher_wallet/get_user_voucher_list",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
