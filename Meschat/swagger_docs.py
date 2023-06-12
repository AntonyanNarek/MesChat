from drf_yasg.utils import swagger_auto_schema
from user_control.serializers import *
from message_control.serializers import *

user_create = swagger_auto_schema(
    operation_summary='User profile create',
    tags=['user'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

get_user = swagger_auto_schema(
    operation_summary='Get user profile',
    tags=['user'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

delete_user = swagger_auto_schema(
    operation_summary='Delete user profile',
    tags=['user'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

user_update_profile = swagger_auto_schema(
    operation_summary='User profile update',
    tags=['user'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

user_partial_update_profile = swagger_auto_schema(
    operation_summary='User profile partial update',
    tags=['user'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

get_user_list = swagger_auto_schema(
    operation_summary='Get user profiles list',
    tags=['user'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

user_login = swagger_auto_schema(
    operation_summary='User login',
    tags=['user'],
    request_body=LoginSerializer,
    responses={
        201: LoginSerializer,
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

user_register = swagger_auto_schema(
    operation_summary='User registration',
    tags=['user'],
    request_body=RegisterSerializer,
    responses={
        201: RegisterSerializer,
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

user_update = swagger_auto_schema(
    operation_summary='User update',
    tags=['user'],
    request_body=RefreshSerializer,
    responses={
        201: RefreshSerializer,
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden'
    }
)

user_queryset = swagger_auto_schema(
    operation_summary='Get users queryset',
    tags=['user'],
    request_body=UserProfileSerializer,
    responses={
        200: UserProfileSerializer,
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden'
    }
)

user_fav_query = swagger_auto_schema(
    operation_summary='Get favourite users query',
    tags=['user'],
    request_body=UserProfileSerializer,
    responses={
        200: UserProfileSerializer,
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

get_query = swagger_auto_schema(
    operation_summary='Get users query',
    tags=['user'],
    request_body=UserProfileSerializer,
    responses={
        200: UserProfileSerializer,
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

get_me = swagger_auto_schema(
    operation_summary='Get user self',
    tags=['user'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

log_out = swagger_auto_schema(
    operation_summary='Logout',
    tags=['user'],
    responses={
        400: 'Bad Request',
        403: 'Forbidden',
        404: 'Not Found'
    }
)

update_favorite_users = swagger_auto_schema(
    operation_summary='Update favourite users',
    tags=['user'],
    responses={
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

check_is_favourite = swagger_auto_schema(
    operation_summary='Check is user favourite',
    tags=['user'],
    responses={
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

get_messages_list = swagger_auto_schema(
    operation_summary='Get messages list',
    tags=['message'],
    responses={
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

get_message = swagger_auto_schema(
    operation_summary='Get message',
    tags=['message'],
    responses={
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

update_message = swagger_auto_schema(
    operation_summary='Update message',
    tags=['message'],
    responses={
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

delete_message = swagger_auto_schema(
    operation_summary='Delete message',
    tags=['message'],
    responses={
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

read_messages = swagger_auto_schema(
    operation_summary='Read messages',
    tags=['message'],
    responses={
        201: 'success',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

get_messages_queryset = swagger_auto_schema(
    operation_summary='Get messages queryset',
    tags=['message'],
    request_body=MessageSerializer,
    responses={
        200: MessageSerializer,
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

create_message = swagger_auto_schema(
    operation_summary='Create a message',
    tags=['message'],
    request_body=MessageSerializer,
    responses={
        201: MessageSerializer,
        204: 'The result has been deleted',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

update_partial_message = swagger_auto_schema(
    operation_summary='Partial update a message',
    tags=['message'],
    responses={
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed'
    }
)

