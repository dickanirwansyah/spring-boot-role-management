package com.app.springangularrole.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class UserCredentials {

    private String username;
    private Boolean loginStatus;
    private String fullName;
    private String role;
    private String picture;
    private String token;
    private String password;
    private String loginAs;
    private String kodeKanwil;
    private String kodeKpp;
    private String pelaksanaKanwil;
    private String penelaahKanwil;

    private String distinguishedNameLogin;
    private String departementLogin;
    private String descriptionLogin;
    private String sAMACountNameLogin;
    private String physicalDeliveryOfficeNameLogin;
    private String displayNameLogin;
    private String employeeNumberLogin;

}
