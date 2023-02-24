---
title: LDAP介绍
description: DC：domain component一般为公司名，例如：dc=163,dc=com; OU：organization unit为组织单元，最多可以有四级，每级最长32个字符，可以为中文
date: 2023-01-23
tags: [java, ldap]
keywords:
 - java
 - ldap
last_update:
  date: 2023-01-23
  author: machu
---


#### 参数介绍
- DC：domain component一般为公司名，例如：dc=163,dc=com
- OU：organization unit为组织单元，最多可以有四级，每级最长32个字符，可以为中文
- CN：common name为用户名或者服务器名，最长可以到80个字符，可以为中文
- DN：distinguished name为一条LDAP记录项的名字，有唯一性，例如：dc:"cn=admin,ou=developer,dc=163,dc=com"

#### java连接LDAP
```java
public static void main(String[] args) {
    LdapConfig ldapConfig = new LdapConfig();
    ldapConfig.setHost("192.168.7.244");
    ldapConfig.setPort(389);
    ldapConfig.setBaseDn("dc=com");
    ldapConfig.setUserDn("dc=codesweet");
    LdapConnector ldapConnector = new LdapConnector(ldapConfig);
    boolean connect = ldapConnector.connect("admin", "123123");
}

public boolean connect(String userName, String password) {
    if (userName.contains(",")){
        String s = userName.split(",")[0];
        if (s.contains("cn=")){
            userName = s.substring(3);
        }
    }
    boolean result = false;
    LdapContext ldapContext = null;
    env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
    env.put(Context.PROVIDER_URL,
            "ldap://" + ldapConfig.getHost() + ":" + ldapConfig.getPort());
    env.put(Context.SECURITY_AUTHENTICATION, "simple");
    String cn = "cn="+userName+","+ldapConfig.getUserDn()+","+ldapConfig.getBaseDn();
    env.put(Context.SECURITY_PRINCIPAL, cn);
    env.put(Context.SECURITY_CREDENTIALS, password);
    try {
        ldapContext = new InitialLdapContext(env, null);
        result = true;
        LogUtil.debug(this,"---connection is ready----");
    } catch (NamingException e) {
        LogUtil.error(this,"--- get connection failure ----",e);
    } finally {
        try {
            if (ldapContext != null) {
                ldapContext.close();
            }
            env.clear();
        } catch (Exception e) {
            LogUtil.error(this,"Ldap context close出错:", e);
        }
    }
    return result;
}
```
