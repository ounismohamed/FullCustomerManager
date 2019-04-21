package com.tp.customermanager.service;


import com.tp.customermanager.model.Customer;
import com.tp.customermanager.model.User;
import com.tp.customermanager.model.UserType;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UserService {

    private List<User> users;

    public UserService() {
        users = new ArrayList<>();
        users.add(new User("user", "123", Arrays.asList(new Customer("Maria", "Lagertha", "Female", "maria@gmail.com", "Rueil", "Paris", "Paris", "5169"))));
        users.add(new User("admin", "123", UserType.ADMIN, null));
    }

    public Iterable<User> getUsers() {
        return users;
    }

    public User getUser(String username, String password) {
        User userTmp = new User();
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getLogin().equals(username) && users.get(i).getPassword().equals(password)) {
                userTmp = users.get(i);
                break;
            }
        }
        return userTmp;
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void updateUser(User user) {
        users.removeIf(userTmp -> userTmp.getLogin().equals(user.getLogin()));
        users.add(user);
    }

    public void deleteUser(String login) {
        users.removeIf(user -> user.getLogin().equals(login));
    }


}
