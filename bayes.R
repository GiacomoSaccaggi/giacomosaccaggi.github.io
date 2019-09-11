

#### Prima parte ####


# modello binomiale-beta (bernoulli-beta)####
## bernoulli
fx_x<-function(x,theta){
  theta^x*(1-theta)^x
}


## modello statistico indotto
#1
# x={0,1}^n
#2
fx_X<-function(X,theta){
  theta^sum(X)*(1-theta)^sum(X)
}
# 3
# thetone = (0,1)

## SMV
theta_hat = sum(x)/n

## Famiglia esponenziale
fx_x<-function(x,theta){
  exp(x*log(theta/(1-theta))+log(1-theta))
}
#1
b_theta <-function(theta){
  log(theta/(1-theta))
}
#2
c_theta <-function(theta){
  -log(1-theta)
}

## prior {beta(alpha=n1 , beta=n2-n1)}
prior<-function(theta,x,n1,n2){
  theta^(n1-1)*(1-theta)^(n2-n1-1)
}


# posterior {beta(sum(x)-alpha , n-sum(x)-beta)}
posterior<-function(theta,x,alpha,beta,n){
  theta^(sum(x)+alpha-1)*(1-theta)^(n-sum(x)+beta-1)
}

#####

# modello poisson-gamma ####
## poisson
fx_x<-function(x,theta){
  theta^x*/factorial(x)*exp(-theta)
}


## modello statistico indotto
#1
# x=N^n
#2
fx_X<-function(X,theta,n){
  (theta^sum(X))/prod(factorial(X))*exp(-theta*n)
}
# 3
# thetone = R^+

## SMV
theta_hat = sum(x)/n

## Famiglia esponenziale
fx_x<-function(x,theta){
  1/factorial(x)*exp(x*log(theta)-theta)
}
#1
b_theta <-function(theta){
  log(theta)
}
#2
c_theta <-function(theta){
  theta
}

## prior {gamma(alpha=n1 , beta=n2)}
prior<-function(theta,x,n1,n2){
  theta^(n1-1)*exp(-n2*theta)
}


# posterior {gamma(sum(x)-alpha , n-beta)}
posterior<-function(theta,x,alpha,beta,n){
  theta^(sum(x)+alpha-1)*exp(-(n+beta)*theta)
}

#####

# modello esponenziale(theta)-gamma ####
## exp
fx_x<-function(x,theta){
  theta*exp(-theta*x)
}


## modello statistico indotto
#1
# x=R^+^n
#2
fx_X<-function(X,theta,n){
  (theta^n)*exp(-theta*sum(X))
}
# 3
# thetone = R^+

## SMV
theta_hat = sum(x)/n

## Famiglia esponenziale
fx_x<-function(x,theta){
  exp(-x*theta+log(theta))
}
#1
b_theta <-function(theta){
  -theta
}
#2
c_theta <-function(theta){
  -log(theta)
}

## prior {gamma(alpha=n2+1 , beta=n1)}
prior<-function(theta,x,n1,n2){
  theta^(n2)*exp(-n1*theta)
}


# posterior {gamma(n+alpha , sum(x)+beta)}
posterior<-function(theta,x,alpha,beta,n){
  theta^(n+alpha-1)*exp(-(sum(x)+beta)*theta)
}

#####

# modello esponenziale(1/theta)-gammaInversa ####
## exp
fx_x<-function(x,theta){
  theta^(-1)*exp(-theta^(-1)*x)
}


## modello statistico indotto
#1
# x=R^+^n
#2
fx_X<-function(X,theta,n){
  (theta^(-n))*exp(-theta^(-1)*sum(X))
}
# 3
# thetone = R^+

## SMV
theta_hat = n/sum(x)

## Famiglia esponenziale
fx_x<-function(x,theta){
  exp(-x*theta(-1)+log(theta^(-1))) #non spostare il -1 ad esponente 
}
#1
b_theta <-function(theta){
  -1/theta
}
#2
c_theta <-function(theta){
  -log(1/theta)
}

## prior {gammainv(alpha=n2+1 , beta=n1)}
prior<-function(theta,x,n1,n2){
  exp(-n1/theta)/theta^(n2+2)
}


# posterior {gammainv(n+alpha , sum(x)+beta)}
posterior<-function(theta,x,alpha,beta,n){
  exp(-(sum(x)+beta)/theta)/theta^(n+alpha+1)
}


#supponiamo di voler generare da Invga(alpha,beta) partendo da Ga(5,10)
#

library("pscl")

densigamma(x,alpha,beta)
pigamma(q,alpha,beta)
qigamma(p,alpha,beta)
rigamma(n,alpha,beta)

#####

# modello Normale(theta=media)-Normale ####
## Normale (sigma^2=noto)
fx_x<-function(x,theta){
  1/sqrt(2*pi*sigma^2)*exp(-(x-theta)^2/(2*sigma^2))
}


## modello statistico indotto
#1
# x=R^n
#2
fx_X<-function(X,theta,n){
  (1/sqrt(2*pi*sigma^2))^n*exp(-sum((x-theta)^2)/(2*sigma^2))
}
# 3
# thetone = R

## SMV
theta_hat = sum(x)/n

## Famiglia esponenziale
fx_x<-function(x,theta){
  exp(x*theta/sigma^2-(theta^2)/(2*sigma^2))
}
#1
b_theta <-function(theta){
  theta/sigma^2
}
#2
c_theta <-function(theta){
  (theta^2)/(2*sigma^2)
}

## prior {Normale(m_0=n1/n2 , s_0^2=(sigma^2)/n2)}
prior<-function(theta,x,n1,n2){
  exp(-sum((x-(n1/n2))^2)/(2*sigma^2/n2))
}


# posterior {Normale(m_0=(sum(x)s_0^2+m_0)/(n*s_0^2+sigma^2) , (s_0^2*sigma^2)/(n*s_0^2+sigma^2))}
posterior<-function(theta,x,m_0,s_0,n){
  exp(-((theta-((sum(x)*s_0^2+m_0)/(n*s_0^2+sigma^2)))^2)/(2*(s_0^2*sigma^2)/(n*s_0^2+sigma^2)))
}

#####

# modello Normale(theta=sigma^2)-Normale ####
## Normale (mu=noto)
fx_x<-function(x,theta){
  1/sqrt(2*pi*theta)*exp(-(x-mu)^2/(2*theta))
}


## modello statistico indotto
#1
# x=R^n
#2
fx_X<-function(X,theta,n){
  (1/sqrt(2*pi*theta))^n*exp(-sum((x-mu)^2)/(2*theta))
}
# 3
# thetone = R

## SMV
theta_hat = sum((x-mu)^2)/n

## Famiglia esponenziale
fx_x<-function(x,theta){
  exp(-((x-mu)^2)/2*theta-log(theta)/2)
}
#1
b_theta <-function(theta){
  -1/(2*theta)
}
#2
c_theta <-function(theta){
  log(theta)/2
}


## prior {gammainv(alpha=n2-3 , beta=n1/2)}
prior<-function(theta,x,n1,n2){
  exp(-(n1/2)/theta)/theta^(n2-2)
}


# posterior {gammainv(n/2+alpha , (sum((x-mu)^2)+beta)/2)}
posterior<-function(theta,x,alpha,beta,n){
  exp(-((sum((x-mu)^2)+beta)/2)/theta)/theta^(n/2+alpha+1)
}


#####




#---------------------
#prior non informative
#---------------------

# prior di Laplace ####

fx_x<-function(x,theta){
  
}

# si basa sulla distribuzione uniforme
# thetone limitato e discreto tethone = { theta_1, ... , theta_k}

prior<-function(theta){
  1/k
}

# di conseguenza risulta proporzionale ad una costante che possiamo dire essere 1

prior<-1

#quindi:
posterior<-fx_x

# 2 problemi:

##1 prob: prior improria ma se posterior proria no problem

lim(theta->tethone_meno , integrate(prior , tethone_meno , tetha )) != 0


lim(theta->tethone_piu , integrate(prior , theta , tethone_piu )) != 1

#posterior per valutare metto al posto di prior posterior


##2 prob: può non essere invariante

theta<-g(lambda)

procedimento1<-function(){
  elicito() #trovo prior per tetha
  riparametrizzo() # sostituisco al posto di theta =g^(-1)(lambda)
  return(prior1)
}

procedimento2<-function(){
  riparametrizzo() # sostituisco al posto di theta =g^(-1)(lambda)
  elicito() #trovo prior per tetha
  return(prior2)
}

ifelse(prior1==prior2,"c'è invarianza","non c'è invarianza")

#####

# prior di Jeffreys ####


fx_x<-function(x,theta){
  
}


info_attesa<-function(){
  -E[(d^2 * log(fx_x)) /(d * tetha^2)] # derivata seconda
}

# trovo che la prior di jeffreys è proporzionale
prior_J<-function(){
  sqrt(info_attesa)
}

# sempre invariante ma non sempre propria



#####

# prior di Vague ####

dnorm(mean = tetha_hat , sd=10^4) 

# posso utilizzare qualsiasi forma funzionale basta che la varianza sia elevata


#####

#### Seconda parte ####


#------------------------------
#STIMA INTERVALLARE (CS E HPD)
#------------------------------

# individuo da dove va thetone e creo un vettore con: seq(from = lim_min, to = lim_max, by = .001)

##### esempio per avere i dati ####
# ad esempio ipotizzo un modello normale-normale:
#x|theta ~ N(m_0=theta , sigma=2)
sigma=2

#theta ~ N(m_0=10 , s_0=1)
m_0=10
s_0=1
n=10
X<-rnorm(n,m_0,s_0)



# iperparametri posterior
m_post<-(sum(X)*s_0^2+m_0)/(n*s_0^2+sigma^2)
s_post<-(s_0^2*sigma^2)/(n*s_0^2+sigma^2)



########## Posterior fatta a mano ####
# posterior {Normale((sum(x)s_0^2+m_0)/(n*s_0^2+sigma^2) , (s_0^2*sigma^2)/(n*s_0^2+sigma^2))}
posterior<-function(theta,x,m_0,s_0,n){
  1/sqrt(2*pi*((s_0^2*sigma^2)/(n*s_0^2+sigma^2)))*exp(-((theta-((sum(x)*s_0^2+m_0)/(n*s_0^2+sigma^2)))^2)/(2*(s_0^2*sigma^2)/(n*s_0^2+sigma^2)))
}

theta_vett<-seq(from = m_post-6, to = m_post+6, by = .01) 
post_val<-numeric()
for(i in 1:length(theta_vett)){
  post_val[i]<-posterior(theta_vett[i],X,m_0,s_0,n)
}
plot(x=theta_vett,y=post_val,type = "l",
     ylab=expression(paste(pi,"(",theta,"|x)")),xlab=expression(theta))



#  CREDIBLE SET
d<-which(post_val>0.01)
theta_fdre<-theta_vett[d]
quantile(theta_fdre,0.025);quantile(theta_fdre,0.975)
CS<-numeric()
CS[1]<-quantile(theta_fdre,0.025)
CS[2]<-quantile(theta_fdre,0.975)

abline(v=CS,lty=2)
legend(2,0.5,"Credible Set",lty=2,bty="n",cex=0.9)




plot(x=theta_vett,y=post_val,type = "l",
     ylab=expression(paste(pi,"(",theta,"|x)")),xlab=expression(theta))
#  HDP
abline(h=0.5,lty=2)
HDP<-numeric()
HDP[1]<-(theta_vett[which.min(abs((post_val[1:which.max(post_val)])-0.5))])
HDP[2]<-(theta_vett[which.max(post_val)+which.min(abs((post_val[which.max(post_val):length(post_val)])-0.5))])
abline(v=HDP,lty=2, col=2)
legend(9,0.3,"Highest Posterior Density",lty=2,bty="n",cex=0.7,col=2)


## tutto insieme

plot(x=theta_vett,y=post_val,type = "l",
     ylab=expression(paste(pi,"(",theta,"|x)")),xlab=expression(theta))
abline(v=CS,lty=2, col=1)
abline(v=HDP,lty=2, col=2)
legend(9,0.3,c("Credible set","HDP"),lty=2,bty="n",cex=0.7,col=c(1,2))

########## riconosco la posterior ####
curve(dnorm(x,mean = m_post,sd=sqrt(s_post)),5,15,
      ylab=expression(paste(pi,"(",theta,"|x)")),xlab=expression(theta))

#  CREDIBLE SET
(CS<-qnorm(c(0.025,0.975),mean = m_post,sd=sqrt(s_post)))
abline(v=CS,lty=2)
legend(10,0.5,"Credible Set",lty=2,bty="n",cex=0.9)



curve(dnorm(x,mean = m_post,sd=sqrt(s_post)),5,15,
      ylab=expression(paste(pi,"(",theta,"|x)")),xlab=expression(theta))
#  HDP
abline(h=0.5,lty=2)

theta_vett<-seq(from = CS[1]-3, to = CS[2]+6, by = .01)
post_val<-dnorm(theta_vett,mean = m_post,sd=sqrt(s_post))


HDP<-numeric()
HDP[1]<-min(theta_vett[which.min(abs((post_val[1:which.max(post_val)])-0.5))])
HDP[2]<-max(theta_vett[which.max(post_val)+which.min(abs((post_val[which.max(post_val):length(post_val)])-0.5))])
abline(v=HDP,lty=2, col=2)
legend(9,0.3,"Highest Posterior Density",lty=2,bty="n",cex=0.7,col=2)


## tutto insieme

plot(x=theta_vett,y=post_val,type = "l",
     ylab=expression(paste(pi,"(",theta,"|x)")),xlab=expression(theta))
abline(v=CS,lty=2, col=1)
abline(v=HDP,lty=2, col=2)
legend(9,0.3,c("Credible set","Highest Posterior Density"),lty=2,bty="n",cex=0.7,col=c(1,2))



#################








#---------------------
#verifica di ipotesi
#---------------------

# Esempio esercizio
#Ipotesi nulla: theta<=0.5. 
# in ambito bayesiano occorre calcolare P(theta<=0.5|x). La posteriori
#e' Beta(2,3). Basta valutare la ripartizione in 0.5

############ calcolo esatto ####

a<-2;b<-3
P_H0<-pbeta(0.5,a,b)
P_H1<-1-P_H0

#oppure se si trattasse di una v.c. non implementata

integranda <- function(theta) {
  12*theta^(a-1)*(1-theta)^(b-1)
}
PH_0<-(integrate(integranda, lower = 0, upper = 0.5))$value
PH_1<-1-PH_0



############ calcolo approssimato ####

# Si può approssimare tramite metodo MC


M <- 1000
set.seed(1243) #stato del generatore di numeri casuali
campioneMC <- rbeta(M,a,b)
hist(campioneMC,freq=F)

# Stima Monte Carlo: frequenza relativa (p) dei valori theta1,...,thetaM <=  0.5
(appr <- sum(campioneMC<= 0.5)/M)
#se ripeto ovviamente da' un valore diverso (ma simile)


#ricalcolare l'approssimazione per M crescenti


# Monte Carlo Std Error: radice della stima della varianza (p(1-p))/M
(SE <- round(sqrt(appr*(1-appr)/M),4))

# IC Monte Carlo al 95%  per P[theta<=0.5|x] 
appr + 2*c(-1,1)*SE











##########################






#### Terza parte ####


# approssimazioni della posterior

## approssimazioni analitiche <- calcolare valore atteso della posterior

### approssimazione normale ####

  #1) calcolo moda posterior

mo<-function(){
  if(posterior="so la formula"){
    posterior<-formula()
  }else{
    max(nucleo_posterior)
  }
}

  #2) calcolo la derivata seconda del log cambiato di segno della posterior 
  #   e sostituisco al posto di tetha la moda

val_atteso_post<-function(tetha = mo()){
  -{(d^2 * log(posterior)) /(d * tetha^2)} # derivata seconda
}


  #3) Quindi

theta_hat=theta_SOPRASSEGNATO=mo()
SIGMA_HAT=val_atteso_post()


(tetha - tetha_hat) ~ N(theta_SOPRASSEGNATO , SIGMA_HAT)


#####





### approssimazione laplace ####

# mi interessa stimare il valore atteso di una trasformazione di theta

E_post[g(theta)]

theta_hat=SMV=Moda_a_posteriori


posterior_L<-function(){
  exp(g(theta_hat)*posterior(theta_hat))sqrt((2*pi)/(-n*h^d2(theta))) # tc h(theta)=1/n * log(g(theta)*posterior(theta)) 
}

#####


## approssimazioni simulative ####



### Monte carlo ####

posterior<-function(){}
#voglio sapere il valore atteso di:
g_theta<-function(){}

#simulo n>>0 valori dalla posterior
# ad esempio
n=1000
theta_vett<-rnorm(n)

theta_vett<-random_posterior(n)

#attuo la trasforma g(theta sui valori generati e poi calcolo la media

valore_atteso_g_theta=sum(g(theta_vett))/n




#####




# monte carlo importance sampling ####

posterior<-function(){}
#voglio sapere il valore atteso di:
g_theta<-function(){}
# occorre scegliere una funzione h(theta)
# con lo stesso supporto della posterior
h_theta<-function(){}
# genero dei valori theta_i da h(theta)

n<-1000
theta_vett<-random.h_thet(n)

valore_atteso_g_theta<-1/n * sum(posterior(theta_vett)/h_theta(theta_vett)) * g_theta(theta_vett)

#####




## monte carlo markov chain 


# Gibbs sampling ####

# problema multivariato va anche bene

# ho la posterior ma non so i valori dei parametri da inserire, quindi:
# al tempo zero estraggo casualmente dei valori per theta 

posterior<-function(){}
f_x<-function(){}




x_0<-posterior(parametri_a_caso)

for(i in 1:(m+n)){
  if(i==1){
    theta_vett<-posterior(x_0)
    x_vett<-f_x(theta_vett[i])
  }else{
    theta_vett<-posterior(x_vett[i-1])
    x_vett<-f_x(theta_vett[i])
  }
}

burn_in_period<-1:m



valore_atteso_g_theta=sum(g(theta_vett[-burn_in_period]))/n



#####






# Gibbs sampling ####

# problema multivariato va anche bene

# ho la posterior ma non so i valori dei parametri da inserire, quindi:
# al tempo zero estraggo casualmente dei valori per theta 

posterior<-function(){}
f_x<-function(){}




x_0<-posterior(parametri_a_caso)

for(i in 1:(m+n)){
  if(i==1){
    theta_vett<-posterior(x_0)
    x_vett<-f_x(theta_vett[i])
  }else{
    theta_vett<-posterior(x_vett[i-1])
    x_vett<-f_x(theta_vett[i])
  }
}

burn_in_period<-1:m



valore_atteso_g_theta=sum(g(theta_vett[-burn_in_period]))/n



#####



# metropolis hasting ####


theta.vett[1]<- rgamma(1,t,u) #alpha estratto da prior
media.theta.vett[1] <-  theta.vett[1]
accettato[1] <- 1

# MH - passo 2-->passo Nsim
for( i in 2:(m+n)){
  candidato <- theta.vett[i-1]+runif(1,-1,1)
  prob.di.accettazione <- min(posterior(candidato)/posterior(theta.vett[i-1])#*(1/2)/(1/2)        
                              ,1)
  if(runif(1)<=prob.di.accettazione){
    theta.vett[i] <- candidato
    accettato[i] <- 1
  }else{
    theta.vett[i] <- theta.vett[i-1]
    accettato[i] <- 0
  }
  media.theta.vett[i] <- mean(theta.vett[2:i])
} 


burn_in_period<-1:m



valore_atteso_g_theta=sum(g(theta.vett[-burn_in_period]))/n





