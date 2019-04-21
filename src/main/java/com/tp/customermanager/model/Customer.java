package com.tp.customermanager.model;

public class Customer {

    private String firstName;
    private String lastName;
    private String gender;
    private String email;
    private String address;
    private String city;
    private String state;
    private String order;

    public Customer(){}

    public Customer(String firstName,
                    String lastName,
                    String gender,
                    String email,
                    String address,
                    String city,
                    String state,
                    String order) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.order = order;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getGender() {
        return gender;
    }

    public String getEmail() {
        return email;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getOrder() {
        return order;
    }
}
