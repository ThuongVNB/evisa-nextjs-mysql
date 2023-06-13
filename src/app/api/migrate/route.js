import { NextResponse } from 'next/server';
import { syncCurrencyModel } from '@/models/Currency';
import { syncUserModel } from '@/models/User';
import { syncCategoryModel } from '@/models/Category';
import { syncCountryModel } from '@/models/Country';
import { syncOrderModel } from '@/models/Order';
import { syncPostModel } from '@/models/Post';
import { syncRoleModel } from '@/models/Role';
import { syncTagModel } from '@/models/Tag';
import { syncVisa_country_detailModel } from '@/models/visa_country_detail';
import { syncVisaModel } from '@/models/Visa';
import { syncXref_post_categoryModel } from '@/models/Xref_post_category';
import { syncXref_visa_countryModel } from '@/models/Xref_visa_country';

export const POST = async (request) => {
    try {
        await syncCurrencyModel();
        await syncCountryModel();
        await syncCategoryModel();
        await syncRoleModel();
        await syncTagModel();
        await syncVisaModel();
        await syncPostModel();
        await syncUserModel();
        await syncOrderModel();
        await syncVisa_country_detailModel();
        await syncXref_post_categoryModel();
        await syncXref_visa_countryModel();

        return new NextResponse('Migration has been successful', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
