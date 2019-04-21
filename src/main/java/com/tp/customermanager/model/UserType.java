package com.tp.customermanager.model;

public enum UserType {

    ADMIN("ADMIN"),USER("USER");

    private String label;

    UserType(String type){
        label = type;
    }

    public String getLabel(){
    return label;
    }

}
