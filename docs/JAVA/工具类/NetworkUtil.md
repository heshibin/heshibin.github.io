---
title: 获取ip、mac地址
description: 获取ip、mac地址 public static String getMacAddress() {InetAddress ia = InetAddress.getLocalHost();
date: 2023-01-07
authors: heshibin
tags: [java, 代码, 工具类]
---



```java
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

public class NetworkUtil {
	
	public static String getMacAddress() {
		try {
			InetAddress ia = InetAddress.getLocalHost();
			byte[] mac = NetworkInterface.getByInetAddress(ia).getHardwareAddress();
			StringBuffer sb = new StringBuffer("");
			for(int i=0; i<mac.length; i++) {
				if(i!=0) {
					sb.append("-");
				}
				int temp = mac[i]&0xff;
				String str = Integer.toHexString(temp);
				if(str.length()==1) {
					sb.append("0"+str);
				}else {
					sb.append(str);
				}
			}
			return sb.toString().toUpperCase();
		} catch (UnknownHostException | SocketException e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public static List<String> getLocalIpAddress() throws SocketException {
		List<String> ipList = new ArrayList<>();
		try {
			Enumeration<NetworkInterface> allNetwork = NetworkInterface.getNetworkInterfaces();
			while (allNetwork.hasMoreElements()) {
				NetworkInterface netInterface = allNetwork.nextElement();
				if (netInterface.isLoopback() || netInterface.isVirtual()) {
					continue;
				}
				Enumeration<InetAddress> inetAddress = netInterface.getInetAddresses();
				while(inetAddress.hasMoreElements()) {
					InetAddress ip = inetAddress.nextElement() ;
					if(ip != null && ip instanceof Inet4Address) {
						ipList.add(ip.getHostAddress()) ;
					}
				}				
			}
		} catch (SocketException ex) {
			throw ex ;
		}
		return ipList;
	}
	
}

```
