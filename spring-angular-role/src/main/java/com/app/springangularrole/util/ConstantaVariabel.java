package com.app.springangularrole.util;

public class ConstantaVariabel {

    //berisikan message

    public static class MSG {
        public final static String SUCCESS = "{\"message\":\"SAVE SUCCESS\"}";
        public final static String FAILED = "{\"message\":\"FAILED SAVE\"}";
        public final static String ROLE_EMPTY = "{\"message\":\"DATA ROLE IS EMPTYE\"}";
        public final static String DELETE_SUCCESS = "{\"message\":\"DELETE SUCCESS\"}";
        public final static String DELETE_FAILED = "{\"message\":\"DELETE FAILED\"}";
    }

    public static class ENCRYPT{
        public final static String KEY = "ARMSTheSecretIngredients";
        public final static String INIT_VECTOR = "RandomInitVector";
    }
}
