from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

user_login = swagger_auto_schema(
    operation_summary='Create category',
    tags=['User'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

user_register = swagger_auto_schema(
    operation_summary='Create competition',
    tags=['User'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

season_create = swagger_auto_schema(
    operation_summary='Create season',
    tags=['Season'],
    responses={
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden'
    }
)

message_create = swagger_auto_schema(
    operation_summary='Create message',
    tags=['Message'],
    responses={
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden'
    }
)

message_get_all = swagger_auto_schema(
    operation_summary='Get all messages',
    tags=['Message'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

competition_get_all = swagger_auto_schema(
    operation_summary='Get all competitions',
    tags=['Competition'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

result_get_all = swagger_auto_schema(
    operation_summary='Get all results',
    tags=['Result'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

season_get_all = swagger_auto_schema(
    operation_summary='Get all seasons',
    tags=['Season'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

competition_delete = swagger_auto_schema(
    operation_summary='Delete a competition',
    tags=['Competition'],
    responses={
        204: 'The competition has been deleted',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

result_delete = swagger_auto_schema(
    operation_summary='Delete a result',
    tags=['Result'],
    responses={
        204: 'The result has been deleted',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

category_delete = swagger_auto_schema(
    operation_summary='Delete a category',
    tags=['Result'],
    responses={
        204: 'The result has been deleted',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

season_delete = swagger_auto_schema(
    operation_summary='Delete a season',
    tags=['Season'],
    responses={
        204: 'The season has been deleted',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

season_put = swagger_auto_schema(
    operation_summary='Update season',
    tags=['Season'],
    responses={
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

season_patch = swagger_auto_schema(
    operation_summary='Partial season update',
    tags=['Season'],
    responses={
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

competition_put = swagger_auto_schema(
    operation_summary='Update competition',
    tags=['Competition'],
    responses={
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

competition_patch = swagger_auto_schema(
    operation_summary='Partial competition update',
    tags=['Competition'],
    responses={
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

result_put = swagger_auto_schema(
    operation_summary='Update results',
    tags=['Result'],
    responses={
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

result_patch = swagger_auto_schema(
    operation_summary='Partial result update',
    tags=['Result'],
    responses={
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

user_registration = swagger_auto_schema(
    operation_summary='User registration',
    tags=['User'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden'
    }
)

user_login = swagger_auto_schema(
    operation_summary='User authorization',
    tags=['User'],

)