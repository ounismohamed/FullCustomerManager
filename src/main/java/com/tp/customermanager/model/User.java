package com.tp.customermanager.model;

import java.util.List;

public class User {

    private String login;
    private String password;
    private UserType type =UserType.USER;
    private List<Customer> customers;

    public User(){
        type = UserType.USER;
    }

    public User(String login, String password, List<Customer> customers) {
        this.login = login;
        this.password = password;
        this.customers = customers;
    }

    public User(String login, String password,UserType type, List<Customer> customers) {
        this.login = login;
        this.password = password;
        this.type = type;
        this.customers = customers;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserType getType() {
        return type;
    }

    public void setType(UserType type) {
        this.type = type;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }
}
