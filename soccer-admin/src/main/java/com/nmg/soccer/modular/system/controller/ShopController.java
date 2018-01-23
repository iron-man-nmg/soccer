package com.nmg.soccer.modular.system.controller;

import com.nmg.soccer.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 商城首页
 * 
 * @author stone
 */
@Controller
public class ShopController extends BaseController {

	/**
	 * 跳转到主页
	 */
	@RequestMapping(value = "/shop", method = RequestMethod.GET)
	public String shopIndex(Model model) {
		return "/portal/index-shop.html";
	}
}
