export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'type_visa_code', headerName: 'Mã loại visa'},
    { field: 'type_visa_name', headerName: 'Tên loại visa'},
    { field: 'type_visa_desc', headerName: 'Mô tả'},
    {field: 'status', headerName: 'Trạng thái'},
];

export const rows = [
    {id: 1, country_id: 'Vietnam', type_visa: 'eVisa', validity: '60 days', processing_times: '20 days', standard_fee: 120, goverment_fee: 25, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Đang sử dụng'},
    {id: 2, country_id: 'Cambodia', type_visa: 'Tourist Visa', validity: '60 days', processing_times: '20 days', standard_fee: 120, goverment_fee: 20, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Tạm ngưng'},
    {id: 3, country_id: 'Laos', type_visa: 'eVisa', validity: '60 days', processing_times: '20 days', standard_fee: 120, goverment_fee: 30, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Đang sử dụng'},
    {id: 4, country_id: 'Thailand', type_visa: 'eVisa', validity: '60 days', processing_times: '20 days', standard_fee: 120, goverment_fee: 15, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Tạm ngưng'},
]