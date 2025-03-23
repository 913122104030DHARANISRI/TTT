import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'screens/welcome_screen.dart';
import 'screens/login_selection_screen.dart';
import 'screens/customer_login_screen.dart';
import 'screens/business_login_screen.dart';
import 'screens/signup_screen.dart';
import 'screens/customer_dashboard.dart';
import 'screens/business_dashboard.dart';

void main() {
  runApp(TownlyApp());
}

class TownlyApp extends StatelessWidget {
  final GoRouter _router = GoRouter(
    initialLocation: '/',
    routes: [
      GoRoute(path: '/', builder: (context, state) => WelcomeScreen()),
      GoRoute(path: '/loginSelection', builder: (context, state) => LoginSelectionScreen()),
      GoRoute(path: '/customerLogin', builder: (context, state) => CustomerLoginScreen()),
      GoRoute(path: '/businessLogin', builder: (context, state) => BusinessLoginScreen()),
      GoRoute(path: '/signup', builder: (context, state) => SignupScreen()),
      GoRoute(path: '/customerDashboard', builder: (context, state) => CustomerDashboard()),
      GoRoute(path: '/businessDashboard', builder: (context, state) => BusinessDashboard()),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      routerConfig: _router,
    );
  }
}
