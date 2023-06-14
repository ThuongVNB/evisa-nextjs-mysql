import { NextResponse } from 'next/server';
import sequelize from '@/utils/db';
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

        // Table use Foreign Key
        await syncUserModel();
        await syncVisa_country_detailModel();
        await syncOrderModel();
        await syncXref_visa_countryModel();
        await syncPostModel();
        await syncXref_post_categoryModel();
        return new NextResponse('Migration has been successful', { status: 201 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const GET = async (request) => {
    try {
        await sequelize.authenticate();
        return new NextResponse('Connection has been established successfully.', { status: 200 });
    } catch (error) {
        return new NextResponse('Unable to connect to the database: ' + error, { status: 403 });
    }
};
