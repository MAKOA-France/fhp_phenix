<?php


namespace Drupal\fhp_phenix;

use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Url;
/**
 * Class CustomService
 * @package Drupal\fhp_phenix\Services
 */
class CustomService {


    public function getCurrentRole() {
        $current_user = \Drupal::currentUser();
        $user = \Drupal\user\Entity\User::load($current_user->id());

        // Get an array of role IDs for the current user.
        $user_roles = $current_user->getRoles();
        return $user_roles;
    }
  
    
}
