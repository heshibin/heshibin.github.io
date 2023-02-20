#### spring bean生命周期?
1. 实例化Bean;
1. 设置对象属性（依赖注入）
    
    实例化后的对象被封装在BeanWrapper对象中，并且此时对象仍然是一个原生的状态，并没有进行依赖注入；
    
    紧接着，Spring根据BeanDefinition中的信息进行依赖注入；

    并且通过BeanWrapper提供的设置属性的接口完成依赖注入。
1. 注入Aware接口

    Spring会检测该对象是否实现了xxxAware接口，并将相关的xxxAware实例注入给Bean。
1. BeanPostProcessor

    经过上述几个步骤，bean对象已经被正确构造，但如果你想要对象被使用前再进行一些自定义的处理，就可以通过BeanPostProcessor接口实现；
    
    有两个函数：
    
    postProcessBeforeInitialzation(Object bean, String beanName) 前置处理
    
    postProcessAfterInitialzation(Object bean, String beanName) 后置处理
    
1. InitializingBean与init-method

    前置处理完成之后进入本阶段。
    
    InitializingBean接口只有一个函数：
    
    afterPropertiesSet()
    
    这一阶段也是增强自定义的逻辑，但是不会把当前bean对象传进来，因此没有办法处理对象本身，只能增加一些额外的逻辑，若要使用它，我们需要让bean实现该接口，Spring会在前置处理完成之后检测当前bean是否实现了该接口，并执行afterPropertiesSet()。

1. DisposableBean和destroy-method


---

#### spring是怎么解决循环依赖的？如果现在有一个A对象，属性是B对象，而B对象的属性是A对象，spring是怎么做的？
大致流程是：

首先A对象实例化，然后对属性进行注入，发现依赖B对象；

B对象此时还没有创建出来，所以转头去实例化B对象；

B对象实例化之后，发现需要依赖A对象，那么A此时已经实例化完成了，所以B对象最终能完成创建；

B对象返回到A对象的属性注入的方法上，最终A对象完成创建。

---

#### spring解决循环依赖的原理？
三级缓存

singletonObjects（一级，日常实际获取Bean的地方）

earlySingletonObjects（二级，还没进行属性注入，由三级缓存放进来）

singletonFactories（三级，Value是一个对象工厂）

A对象实例化之后，属性注入之前，会把A对象放进三级缓存中， Key是BeanName, Value是ObjectFactory；

等到A对象属性注入时，发现依赖B，又去实例化B;

B属性注入需要去获得A对象，这里就是去从三级缓存中拿到对应的Bean；

再把三级缓存中的记录干掉，放入二级缓存中；

等到完全初始化之后，再remove掉二级缓存中的，塞到一级缓存；

我们去getBean的时候，实际上拿到的是一级缓存中的；

--- 

#### 为什么是三级缓存？
首先从第三级缓存说起（就是key是BeanName, value为ObjectFactory）

我们的对象是单例的，有可能A对象依赖的B对象是有AOP的(B对象需要代理)

假设没有三级缓存，只有第二级缓存

那如果有AOP的情况下，岂不是在存入第二级缓存之前都需要先去做AOP代理

而二级缓存存在的必要就是为了性能，从三级缓存的工厂里创建出对象，再扔到二级缓存中，这样就不需要每次都从工厂里面拿。

--- 

#### IOC和AOP?
##### IOC 控制反转也叫依赖注入，利用了工厂模式
将对象交给容器管理，只需要在spring配置文件中配置相应的bean,以及设置相关的属性，让spring容器来生成类的实例对象以及管理对象；

在spring容器启动的时候，spring会把你在配置文件中配置的bean都初始化好；

然后在你需要调用的时候，就把初始化好的那些bean分配给你需要调用的这些bean的类，就不需要在去new这些bean。
##### AOP 面向切面编程 代理模式
AOP可以说是对OOP的补充和完善，OOP允许从上到下的关系，但并不适合从左到右的关系，例如日志；

将程序中的交叉业务逻辑（安全、日志、事务等），封装成一个切面，然后注入到目标对象（具体业务逻辑）中去；

实现AOP的技术：

动态代理

静态织入

---

#### spring作用域
Singleton 单例模式

Prototype 多例模式

Request HTTP请求

Session 会话

global-session 全局会话

---

#### spring注解
类级别的注解：

@Controller、@Service、@Component、@Repository

类内部的注解:

@AutoWired、@Value、@Resource

---

#### @AutoWired和@Resource的区别
@AutoWired是byType

@Resource是byName