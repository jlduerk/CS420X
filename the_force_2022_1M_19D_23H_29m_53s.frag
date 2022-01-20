#define PI 3.14159265359


vec3 bgcolor1 = vec3(0.043,0.279,0.350);
vec3 bgcolor2 = vec3(0.0,0.0,0.0);


float random (vec2 st) {
    return fract(cos(dot(st.xy, vec2(100000,788.233)))*4832333.*time);
}


void main() {
    
    
    
      vec2 p = uv();
      vec2 p2 = uv();
    float frequency = 2.;
    float gain = 1.;
     float thickness = .0025;
  
  
    vec2 st = gl_FragCoord.xy/resolution.xy;
    vec3 bgcolor = vec3(0.0);

    vec3 pct = vec3(1.-st.y);
    pct.g = sin(st.x*PI);

    bgcolor1 = vec3(0.043,0.279,0.350);
    bgcolor = mix(bgcolor1, bgcolor2, pct);
    
    
    p.x += cos( p.y + time / frequency) * gain; 
    p2.x += cos( p.y + time / frequency) * gain ; 
    
      float color1 = sin( p.x / p.y * frequency  + time );
      float color2 = cos( p.y/p2.x * frequency *0.5 + (time*2. -p.y) );
    
    float stars = random( st );
    
     float linescolor = 0.; 
      for( float i = 0.; i < 5.; i++ ) { 
        p.x += sin( p.y ) * gain * i*i; 
        linescolor += abs( thickness / p.x );
    }
    for( float i = 0.; i < 7.; i++ ) { 
        p.x += sin( p.y * time ) * gain; 
        linescolor += abs( thickness / p.x );
    }
    
      for( float i = 0.; i < 1.; i++ ) { 
        p.y += sin( p.x ) * .2; 
        linescolor += abs( thickness*0.1 / p.y );
    }

    
    gl_FragColor = vec4(bgcolor+(sin(time/5.)/5.+0.1),1.) + 
        vec4(color2*0.1,color2*0.1 + color2*0.1,color2*0.1, 0.1) + 
        vec4(color1*0.2,color1*0.1 + color1*0.05,color1*0.1, 0.1) + 
        vec4(vec3(stars), 1.0) + vec4(linescolor);
}
