package com.tp.customermanager.rest;


import com.tp.customermanager.model.Customer;
import com.tp.customermanager.model.User;
import com.tp.customermanager.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserRestController {

    private UserService userService;

    public UserRestController() {
        userService = new UserService();
    }

    @RequestMapping(method = RequestMethod.GET,
            path = "/api/users",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<User> getUsers() {
        return userService.getUsers();
    }

    @RequestMapping(method = RequestMethod.GET,
            path = "/api/users/{login}/{password}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User getUser(@PathVariable("login")String login,
                        @PathVariable("password") String password) {
        return userService.getUser(login, password);
    }

    @RequestMapping(method = RequestMethod.POST,
            path = "/api/users",
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @RequestMapping(method = RequestMethod.DELETE,
            path = "/api/users/{login}")
    public void deleteUser(@PathVariable("login") String login) {
        userService.deleteUser(login);
    }

    @RequestMapping(method = RequestMethod.PUT,
            path = "/api/users",
            consumes= MediaType.APPLICATION_JSON_VALUE)
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

}
