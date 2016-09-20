package controllers

import javax.inject._
import play.api._
import play.api.libs.json._
import play.api.mvc._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject() extends Controller {

  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index = Action {
    Ok(views.html.index("App is Ready !!"))
  }

  def calc() = {
    540;
  }

  def calcResult = Action { implicit request =>

    val calcResult = 450

    val json: JsValue = JsObject(Seq(
      "error" -> JsBoolean(false),
      "result" -> JsNumber(calc()),
      "message" -> JsString(null)
    ))

    /* Removing Message Property */
    val successResult = json.as[JsObject] - "message"
    val errorResult = json.as[JsObject] - "result"

    Ok(successResult)
  }

}
