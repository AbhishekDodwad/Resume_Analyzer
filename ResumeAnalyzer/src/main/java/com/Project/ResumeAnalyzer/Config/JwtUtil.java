package com.Project.ResumeAnalyzer.Config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {
@Value("${jwt.secret}")
    private String secret;

@Value("${jwt.expiration}")
    private long expirationTime;

private Key getSigningKey(){
    return Keys.hmacShaKeyFor(secret.getBytes());
}

public String generateToken(String email){
    return Jwts.builder()
            .setSubject(email)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis()+expirationTime))
            .signWith(getSigningKey(), SignatureAlgorithm.HS256)
            .compact();
}

public String extractEmail(String token){
    return parseClaims(token).getSubject();
}

  public boolean validateToken(String token){
    try{
        parseClaims(token);
        return true;
    }catch (ExpiredJwtException e){
        System.out.println("Token Expired "+e.getMessage());
    }catch (MalformedJwtException e){
        System.out.println("Invalid token format"+e.getMessage());
    }catch(UnsupportedJwtException e){
          System.out.println("unsupported token:"+e.getMessage());
      }catch (IllegalArgumentException e){
        System.out.println("Token claims string is empty:"+e.getMessage());
    }
    return false;
  }
  private Claims parseClaims(String token){
    return Jwts.parserBuilder()
            .setSigningKey(getSigningKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
  }

}
