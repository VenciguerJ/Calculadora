print('calculadora, operações possíveis: + - /')
numero1 = float(input('qual é o primeiro número?'))
operação = input('qual é a operação (digite em simbolos)')
numero2 = float(input('qual é o segundo número?'))
   
    #calculo

if operação == '+':
    print(numero1 + numero2)
elif operação == '-':
    print(numero1 - numero2)
elif operação == '/':
    print(numero1 / numero2)
elif operação == '*':
    print(numero1 * numero2)
else:
    print('digita certinho aí, isso aqui tem umas 40 linha de códgio pô!')