package library

object RPN {

    def calculate(str: String) = {

        val ops = Map(
            "+" -> ((_: Double) + (_: Double)),
            "*" -> ((_: Double) * (_: Double)),
            "-" -> ((x: Double, y: Double) => y - x),
            "/" -> ((x: Double, y: Double) => y / x)
        )

        val stack = new scala.collection.mutable.Stack[Double]

        str.split(' ').foreach(token =>
            stack.push(
                if (ops.contains(token)) ops(token)(stack.pop, stack.pop)
                else java.lang.Double.parseDouble(token)
            ))

        stack.pop

    }

}
